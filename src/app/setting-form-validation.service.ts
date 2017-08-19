import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';

import { P3Service } from './p3.service';

/** Validates all the parameters **/
@Injectable()
export class SettingFormValidationService {
  normalBaseCodes = ['A','C','G','T','N','a','c','g','t','n'];
  ambiguousBaseCodes = ['A','C','G','T','N','a','c','g','t','n', 
                        'R','Y','W','S','M','K','B','H','D','V',
                        'r','y','w','s','m','k','b','h','d','v'];
  sequenceTemplateCodes = ['A','C','G','T','N','a','c','g','t','n', '[',']','<','>'];

  settingForm: FormGroup;

  constructor(private p3Service: P3Service) { }

  private checkNucleotideSequence(sequence: string, acceptedBaseCodes): any {
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
        return {invalidPos: i, invalidCode: sequence[i]};
      }
    }
    return null;
  }

  sequenceTemplateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let sequence = control.value.replace(/\n/g, '');
      
      // check if the sequence is ok
      let message = this.checkNucleotideSequence(sequence, this.sequenceTemplateCodes);
      if(message != null){
        this.p3Service.params['SEQUENCE_TEMPLATE']['value'] = sequence;
        return {'invalidSequence': message, 'invalidRegionCodes':null};
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
        let numTotalRegionCodes = numTargetRegionsStarts + numTargetRegionsEnds + numExcludedRegionsStarts + numExcludedRegionsEnds;
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
            return { 'invalidSequence': null, 'invalidRegions': true };
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
            return { 'invalidSequence': null, 'invalidRegions': true };
          }
        }
      }

      // invalid target regions
      if(numTargetRegionsStarts != numTargetRegionsEnds){
        return { 'invalidSequence': null, 'invalidRegions': true };
      }

      // invalid excluded regions
      if(numExcludedRegionsStarts != numExcludedRegionsEnds){
        return { 'invalidSequence': null, 'invalidRegions': true };
      }

      // share the sequence temmpate
      this.p3Service.p3Input.SEQUENCE_TEMPLATE = sequence.replace(/\[|\]|\<|\>/g, '');

      // share the regions
      this.p3Service.p3Input.SEQUENCE_TARGET = targetRegions;
      this.p3Service.p3Input.SEQUENCE_EXCLUDED_REGION = excludedRegions;

      // update the regions in the form
      try{
        this.settingForm.patchValue({SEQUENCE_TARGET: this.p3Service.convertArrToStrList(targetRegions)});
        this.settingForm.patchValue({SEQUENCE_EXCLUDED_REGION: this.p3Service.convertArrToStrList(excludedRegions)});
      } catch(e){

      }

      // update the gc content
      this.p3Service.calcGcContent();

      // update the product size
      this.p3Service.calcProdSize();
      try{
        this.settingForm.patchValue({PRIMER_PRODUCT_SIZE_MIN: this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0]});
        this.settingForm.patchValue({PRIMER_PRODUCT_SIZE_MAX: this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]});
      } catch(e){

      }

      return { 'invalidSequence': null, 'invalidRegions': false};
    };
  }

  nucleotideSequenceValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let message = this.checkNucleotideSequence(control.value, this.normalBaseCodes);
      return {'invalidSequence': message};
    };
  }

  ambiguousNucleotideSequenceValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let message = this.checkNucleotideSequence(control.value, this.ambiguousBaseCodes);
      return {'invalidSequence': message};
    };
  }

  private checkIntervalListArr(arr: Array<Array<number>>){
    for(let i = 0; i < arr.length; i++){
      let start:number = arr[i][0];
      let length:number = arr[i][1];
      console.log(start + ", " + length)
      if(start < 0 || length < 0 || start + length > this.p3Service.p3Input.SEQUENCE_TEMPLATE.length){
        return {};
      }
    }
    return null;
  }

  private checkIntervalList(intervalList: string){
    let arr = this.p3Service.convertStrListToArr(intervalList);
    return this.checkIntervalListArr(arr);
  }

  intervalListValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let message = this.checkIntervalList(control.value);
      return {'invalidIntervalList': message};
    };
  }

  targetRegionValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let arr = this.p3Service.convertStrListToArr(control.value);
      let message = this.checkIntervalListArr(arr);
      // if there is no error in the interval list
      /*
      if(message === null){
        console.log(arr)
        // update the sequence template input
        if(arr.length > 0){
          
          try{
            let numInserted = 0;
            let sequence = this.p3Service.p3Input.SEQUENCE_TEMPLATE;
            for(let i = 0; i < 1; i++){
              let start = arr[i][0];
              let length = arr[i][1];
              sequence = sequence.substr(0, start) + "[" + 
                         sequence.substr(start, start+length) + "]" + 
                         sequence.substr(start+length);
              console.log(sequence)
            }
            this.settingForm.patchValue({SEQUENCE_TEMPLATE_INPUT:sequence});
          } catch(e){

          }
        }

        // add it to the shared param
        this.p3Service.p3Input.SEQUENCE_TARGET = arr;
        
      }
      */
      return {'invalidIntervalList': message};
    };
  }

  productSizeMinValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if( control.value < 0 || 
          control.value > this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]){
        return {'invalidMin': true};
      }
      this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = control.value;
      return {'invalidMin': false};
    };
  }

  productSizeMaxValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] || 
         control.value > this.p3Service.p3Input.SEQUENCE_TEMPLATE.length){
        return {'invalidMax': true};
      }
      this.p3Service.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = control.value;
      return {'invalidMax': false};
    };
  }

  maxTmValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      return {'invalidMax': null};
    };
  }
}
