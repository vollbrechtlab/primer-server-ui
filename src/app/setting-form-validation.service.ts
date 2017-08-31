import { Injectable } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators, 
         FormControl, 
         AbstractControl, 
         ValidatorFn } from '@angular/forms';

import { P3Service } from './p3.service';

/** Validates all the parameters **/
@Injectable()
export class SettingFormValidationService {
  normalBaseCodes = ['A','C','G','T','N','a','c','g','t','n'];
  ambiguousBaseCodes = ['A','C','G','T','N','a','c','g','t','n', 
                        'R','Y','W','S','M','K','B','H','D','V',
                        'r','y','w','s','m','k','b','h','d','v'];
  sequenceTemplateCodes = ['A','C','G','T','N','a','c','g','t','n', 
                           '[',']','<','>'];

  //normalBaseCodes = new RegExp('ACGTNacgtn');
  //ambiguousBaseCodes = new RegExp('ACGTNacgtnRYWSMKBHDVrywsmkbhdv');
  //sequenceTemplateCodes = new RegExp('ACGTNacgtn[]<>');

  settingForm: FormGroup;

  constructor(private p3Service: P3Service) { }

  /**
   * Check the nucleotide sequence string.
   * @param {string} sequence The sequence string to be checked
   * @param {Array.<string>} acceptedBaseCodes the codes that can be used in the sequence string
   * @returns {?Object}
   */
  checkNucleotideSequence(sequence: string, acceptedBaseCodes): any {
    for(var i = 0; i < sequence.length; i++)
    {
      let isThisBaseOk = false;
      for(let j = 0; j < acceptedBaseCodes.length; j++)
      {
        if(sequence[i] == acceptedBaseCodes[j]) {
          isThisBaseOk = true;
          break;
        } 
      }
      if(!isThisBaseOk) {
        return {'invalidSequence': {
                  'invalidPos': i, 
                  'invalidCode': sequence[i]
               }};
      }
    }
    return null;
  }

  /**
   * Validates the sequance template input
   */
  sequenceTemplateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      if(control.value == ''){
        return null;
      }
      let sequence = control.value.replace(/\n/g, '');
      
      // check if the sequence is ok
      let message = this.checkNucleotideSequence(sequence, this.sequenceTemplateCodes);
      if(message != null){
        this.p3Service.params['SEQUENCE_TEMPLATE']['value'] = sequence;
        return message;
      }

      // check if the regions codes are ok
      let targetRegions = [];
      let currentTargetRegion = 0;
      let numTargetRegionsStarts = 0;
      let numTargetRegionsEnds = 0;

      let excludedRegions = [];
      let currentExcludedRegion = 0;
      let numExcludedRegionsStarts = 0;
      let numExcludedRegionsEnds = 0;

      for(let i = 0; i < sequence.length; i++) 
      {
        let numTotalRegionCodes = numTargetRegionsStarts + 
                                  numTargetRegionsEnds + 
                                  numExcludedRegionsStarts + 
                                  numExcludedRegionsEnds;
        // check the excluded regions
        if(sequence[i] == '[')
        {
          targetRegions.push([i-numTotalRegionCodes]);
          numTargetRegionsStarts++;
        } 
        else if(sequence[i] == ']') 
        {
          try {
            targetRegions[currentTargetRegion].push(i-targetRegions[currentTargetRegion][0]-numTotalRegionCodes);
            currentTargetRegion++;
            numTargetRegionsEnds++;
          } catch(e) { // invalid target regions
            return {'invalidRegions': true };
          }
        }

        // check the excluded regions
        if(sequence[i] == '<')
        {
          excludedRegions.push([i-numTotalRegionCodes]);
          numExcludedRegionsStarts++;
        } 
        else if(sequence[i] == '>') 
        {
          try {
            excludedRegions[currentExcludedRegion].push(i-excludedRegions[currentExcludedRegion][0]-numTotalRegionCodes);
            currentExcludedRegion++;
            numExcludedRegionsEnds++;
          } catch(e) { // invalid excluded regions
            return { 'invalidRegions': true };
          }
        }
      }

      // invalid target regions
      if(numTargetRegionsStarts != numTargetRegionsEnds){
        return { 'invalidRegions': true };
      }

      // invalid excluded regions
      if(numExcludedRegionsStarts != numExcludedRegionsEnds){
        return { 'invalidRegions': true };
      }

      // share the sequence temmpate
      this.p3Service.p3Input.SEQUENCE_TEMPLATE = sequence.replace(/\[|\]|\<|\>/g, '');

      // share the regions
      this.p3Service.p3Input.SEQUENCE_TARGET = targetRegions;
      this.p3Service.p3Input.SEQUENCE_EXCLUDED_REGION = excludedRegions;

      // update the target regions in the form
      let validator = this.settingForm.controls['SEQUENCE_TARGET'].validator; // tempolaralily remove validator
      this.settingForm.controls['SEQUENCE_TARGET'].clearValidators();
      this.settingForm.patchValue({SEQUENCE_TARGET: this.p3Service.convertArrToStrList(targetRegions)});
      this.settingForm.controls['SEQUENCE_TARGET'].setValidators(validator);// recover the validator

      // update the excluded regions in the form
      validator = this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].validator; // tempolaralily remove validator
      this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].clearValidators();
      this.settingForm.patchValue({SEQUENCE_EXCLUDED_REGION: this.p3Service.convertArrToStrList(excludedRegions)});
      this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].setValidators(validator);// recover the validator
      
      // update the gc content
      this.p3Service.calcGcContent();

      // update the product size
      this.p3Service.calcProdSize();
      this.settingForm.get('PRIMER_PRODUCT_SIZE_RANGE').patchValue({PRIMER_PRODUCT_SIZE_MIN: this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0]});
      this.settingForm.get('PRIMER_PRODUCT_SIZE_RANGE').patchValue({PRIMER_PRODUCT_SIZE_MAX: this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]});

      // returning null means no error
      return null;
    };
  }

  nucleotideSequenceValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let message = this.checkNucleotideSequence(control.value, this.normalBaseCodes);
      return message;
    };
  }

  ambiguousNucleotideSequenceValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let message = this.checkNucleotideSequence(control.value, this.ambiguousBaseCodes);
      return message;
    };
  }

  /**
   * Check the interval list array
   * @param {Array.Array.number} arr Interval list
   * @returns {Object} 
   */
  checkIntervalListArr(arr: Array<Array<number>>): {[key: string]: any} {
    if(arr == null){
      return {'invalidIntervalList': true};
    }
    for(let i = 0; i < arr.length; i++){
      let start:number = arr[i][0];
      let length:number = arr[i][1];
      if(start < 0 || length < 0 || start + length > this.p3Service.p3Input.SEQUENCE_TEMPLATE.length){
        return {'invalidIntervalList': true};
      }
    }
    return null;
  }

  checkIntervalList(intervalList: string){
    let arr = this.p3Service.convertStrListToArr(intervalList);
    return this.checkIntervalListArr(arr);
  }

  intervalListValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let message = this.checkIntervalList(control.value);
      return message;
    };
  }

  sequenceRegionValidator(type: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let arr = this.p3Service.convertStrListToArr(control.value);
      let message = this.checkIntervalListArr(arr);
      
      // if there is no error in the interval list
      if(message === null){
        // update the sequence template input
        if(arr.length > 0){
          
          try{
            let numInserted = 0;
            let sequence = this.p3Service.p3Input.SEQUENCE_TEMPLATE;
            for(let i = 0; i < arr.length; i++){
              let start = arr[i][0];
              let length = arr[i][1];
              if(type == 'SEQUENCE_TARGET'){
                sequence = sequence.substr(0, start) + "[" + 
                           sequence.substr(start, length) + "]" + 
                           sequence.substr(start+length);
              } else {
                sequence = sequence.substr(0, start) + "<" + 
                           sequence.substr(start, length) + ">" + 
                           sequence.substr(start+length);
              }

            }
            // tempolariry remove the validator
            let validator =  this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].validator;
            this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].clearValidators();
            this.settingForm.patchValue({SEQUENCE_TEMPLATE_INPUT:sequence});
            // recover the validator
            this.settingForm.controls['SEQUENCE_TEMPLATE_INPUT'].setValidators(validator);
          } catch(e){

          }
        }

        // add it to the shared param
        this.p3Service.p3Input.SEQUENCE_TARGET = arr;
        
      }
      
      return message;
    };
  }

  /**
   * Validate the product size input
   */
  productSizeValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let error = {};
      if( control.value['PRIMER_PRODUCT_SIZE_MIN'] < 0 || 
          control.value['PRIMER_PRODUCT_SIZE_MIN'] > this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]){
        error['invalidMin'] = true;
      }
      if( control.value['PRIMER_PRODUCT_SIZE_MAX'] < this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] || 
          control.value['PRIMER_PRODUCT_SIZE_MAX'] > this.p3Service.p3Input.SEQUENCE_TEMPLATE.length){
        error['invalidMax'] = true;
      }
      console.log(error)
      if(Object.keys(error).length > 0){
        return error;
      }
      // share the variables
      this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = control.value['PRIMER_PRODUCT_SIZE_MIN'];
      this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = control.value['PRIMER_PRODUCT_SIZE_MAX'];
      return null;
    };
  }

  maxTmValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      return null;
    };
  }

}

