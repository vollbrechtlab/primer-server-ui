import { Injectable } from '@angular/core';
import { FormBuilder, 
         FormGroup, 
         Validators, 
         FormControl, 
         AbstractControl, 
         ValidatorFn } from '@angular/forms';

import { DataService } from '../data-share/data.service';

/** Validates all the parameters **/
@Injectable()
export class ParamsValidationService {
  normalBaseCodes = ['A','C','G','T','N','a','c','g','t','n'];
  ambiguousBaseCodes = ['A','C','G','T','N','a','c','g','t','n', 
                        'R','Y','W','S','M','K','B','H','D','V',
                        'r','y','w','s','m','k','b','h','d','v'];
  sequenceTemplateCodes = ['A','C','G','T','N','a','c','g','t','n', 
                           '[',']','(',')'];

  //normalBaseCodes = new RegExp('ACGTNacgtn');
  //ambiguousBaseCodes = new RegExp('ACGTNacgtnRYWSMKBHDVrywsmkbhdv');
  //sequenceTemplateCodes = new RegExp('ACGTNacgtn[]<>');

  settingForm: FormGroup;

  status:string = 'ok';

  strListPatt = new RegExp("[0-9]-[0-9]");

  constructor(private dataService: DataService) { 

  }


  /**
   * Convert the string interval list to array of array of ints
   * @param {string} strList interval list string
   * @returns {Array.Array.number}
   */
  convertStrListToArr(strList: string): Array<Array<number>> {
    if(strList == null){ // null string list
      return null;
    }
    if(strList == ''){ // empty string list
      return [];
    }
    
    let arr = [];
    let splitted = strList.split(" ");
    for(let i = 0; i < splitted.length; i++){
      if(splitted[i] != ''){
        if(this.strListPatt.test(splitted[i])){
          let interval = splitted[i].split("-");
          let start:number = parseInt(interval[0]);
          let length:number = parseInt(interval[1]);
          arr.push([start, length]);
        } else {
          return null;
        }
      }
    }
    return arr;
  }

  /**
   * Convert the array of array of ints to the string interval list
   * @param {Array} arr Array of array of ints
   * @returns {string}
   */
  convertArrToStrList(arr: Array<Array<number>>): string{
    if(arr == null){
      return null;
    }
    if(arr.length == 0){
      return '';
    }
    let strList = "";
    for(let i = 0; i < arr.length; i++){
      if(arr[i].length == 2){
        strList += arr[i][0] + "-" + arr[i][1] + " ";
      } else {
        return null;
      }
    }
    return strList;
  }

  /**
   * Calculate the GC content based on the SEQUENCE_TEMPLATE
   */
  calcGcContent() {
    if(this.dataService.p3Input.SEQUENCE_TEMPLATE.length == 0){
      this.dataService.length = 0;
      this.dataService.gc_content = 0;
      return;
    }
    var numGc = 0;
    for(var i = 0; i < this.dataService.p3Input.SEQUENCE_TEMPLATE.length; i++){
      if(this.dataService.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'G' || this.dataService.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'C'){
        ++numGc;
      }
    }
    this.dataService.gc_content = Math.round(numGc/this.dataService.p3Input.SEQUENCE_TEMPLATE.length*100);
  }

  /**
   * Calculate the product size based on the SEQUENCE_TEMPLATE
   */
  calcProdSize() {
    this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = Math.round(this.dataService.p3Input.SEQUENCE_TEMPLATE.length/3);
    this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = this.dataService.p3Input.SEQUENCE_TEMPLATE.length;
  }


  /**
   * Check the nucleotide sequence string.
   * @param {string} sequence The sequence string to be checked
   * @param {Array.<string>} acceptedBaseCodes the codes that can be used in the sequence string
   * @returns {?Object}
   */
  checkNucleotideSequence(sequence: string, acceptedBaseCodes): any {
    if(sequence == null){
      return null;
    }
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
        return {
          'invalidSequence': {
          'invalidPos': i, 
          'invalidCode': sequence[i]
        }};
      }
    }
    return null;
  }

  // clean the input when it is a fasta format
  fastaCleaner(seq) {
    let newSeq = "";
    let splitted = seq.split('\n');
    let readSeqNum = 0;
    let updated = false;
    for(let i = 0; i < splitted.length; i++){
      if(splitted[i].includes('>')){
        readSeqNum++;
        i++;
      }
      if(readSeqNum == 1){
        updated = true;
        newSeq += splitted[i];
      }
      if(readSeqNum > 1){
        break;
      }
    }
    if(updated){
      return newSeq;
    }
    return seq;
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
        // empty
        this.dataService.p3Input.SEQUENCE_TEMPLATE = '';
        return null;
      }
      
      var sequence = this.fastaCleaner(control.value);
      
      sequence = sequence.replace(/\n/g, '');
      sequence = sequence.replace(/\s/g, '');

      if(sequence.length > 5000){
        return {
          'tooLongSequence': true
        };
      }
     
      // check if the sequence is ok
      let message = this.checkNucleotideSequence(sequence, this.sequenceTemplateCodes);
      if(message != null){
        this.dataService.p3Input.SEQUENCE_TEMPLATE = sequence;
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
        if(sequence[i] == '(')
        {
          excludedRegions.push([i-numTotalRegionCodes]);
          numExcludedRegionsStarts++;
        } 
        else if(sequence[i] == ')') 
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
      this.dataService.p3Input.SEQUENCE_TEMPLATE = sequence.replace(/\[|\]|\(|\)/g, '');

      // share the regions
      this.dataService.p3Input.SEQUENCE_TARGET = targetRegions;
      this.dataService.p3Input.SEQUENCE_EXCLUDED_REGION = excludedRegions;

      // update the target regions in the form
      let validator = this.settingForm.controls['SEQUENCE_TARGET'].validator; // tempolaralily remove validator
      this.settingForm.controls['SEQUENCE_TARGET'].clearValidators();
      this.settingForm.patchValue({SEQUENCE_TARGET: this.convertArrToStrList(targetRegions)});
      this.settingForm.controls['SEQUENCE_TARGET'].setValidators(validator);// recover the validator

      // update the excluded regions in the form
      validator = this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].validator; // tempolaralily remove validator
      this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].clearValidators();
      this.settingForm.patchValue({SEQUENCE_EXCLUDED_REGION: this.convertArrToStrList(excludedRegions)});
      this.settingForm.controls['SEQUENCE_EXCLUDED_REGION'].setValidators(validator);// recover the validator
      
      // update the gc content
      this.calcGcContent();

      /*
      // update the product size
      this.dataService.calcProdSize();
      this.settingForm.patchValue({PRIMER_PRODUCT_SIZE_MIN: this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0]});
      this.settingForm.patchValue({PRIMER_PRODUCT_SIZE_MAX: this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]});
      */

      // returning null means no error
      return null;
    };
  }

  pickLeftPrimerValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_PICK_LEFT_PRIMER = control.value;
      if(control.value){
        this.settingForm.get('SEQUENCE_PRIMER').setValue(null);
      }
      return null;
    };
  }
  pickInternalOligoValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_PICK_INTERNAL_OLIGO = control.value;
      if(control.value){
        this.settingForm.get('SEQUENCE_INTERNAL_OLIGO').setValue(null);
      }
      return null;
    };
  }
  pickRightPrimerValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_PICK_RIGHT_PRIMER = control.value;
      if(control.value){
        this.settingForm.get('SEQUENCE_PRIMER_REVCOMP').setValue(null);
      }
      return null;
    };
  }

  nucleotideSequenceValidator(name: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      let message = this.checkNucleotideSequence(control.value, this.normalBaseCodes);
      // no error
      if(message == null){
        this.dataService.p3Input[name] = control.value;
      }
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
      if(start < 0 || length < 0 || start + length > this.dataService.p3Input.SEQUENCE_TEMPLATE.length){
        return {'invalidIntervalList': true};
      }
    }
    return null;
  }

  checkIntervalList(intervalList: string){
    let arr = this.convertStrListToArr(intervalList);
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
      let arr = this.convertStrListToArr(control.value);
      let message = this.checkIntervalListArr(arr);
      
      // if there is no error in the interval list
      if(message === null){
        // update the sequence template input
        if(arr.length > 0){

          // check if Product size max is larger than sum of target length
          let sumTargetLength = 0;
          for(let i = 0; i < arr.length; i++){
            sumTargetLength += arr[i][1];
          }
          if(sumTargetLength > this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1]){
            console.log("invalid")
            return {"invalidLength":sumTargetLength};
          }
          
          try{
            let numInserted = 0;
            let sequence = this.dataService.p3Input.SEQUENCE_TEMPLATE;
            for(let i = 0; i < arr.length; i++){
              let start = arr[i][0];
              let length = arr[i][1];
              if(type == 'SEQUENCE_TARGET'){
                sequence = sequence.substr(0, start) + "[" + 
                           sequence.substr(start, length) + "]" + 
                           sequence.substr(start+length);
              } else {
                sequence = sequence.substr(0, start) + "(" + 
                           sequence.substr(start, length) + ")" + 
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
        if(type == 'SEQUENCE_TARGET'){
          this.dataService.p3Input.SEQUENCE_TARGET = arr;
        } else {
          this.dataService.p3Input.SEQUENCE_EXCLUDED_REGION = arr;
        }
        
        
      }
      
      return message;
    };
  }

  /**
   * Validate the product size min input
   */
  productSizeMinValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      if(this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE == null){
        this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE = [[]]
      }
      if( control.value < 0 || 
          control.value > this.settingForm.get('PRIMER_PRODUCT_SIZE_MAX').value){
        control.value < this.settingForm.get('PRIMER_PRODUCT_SIZE_MAX').setErrors({'invalidMax': true});
      this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = control.value;
        return {'invalidMin': true};
      }
      control.value < this.settingForm.get('PRIMER_PRODUCT_SIZE_MAX').setErrors(null);
      this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = control.value;
      return null;
    };
  }

  /**
   * Validate the product size max input
   */
  productSizeMaxValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      if(control.value < this.settingForm.get('PRIMER_PRODUCT_SIZE_MIN').value){
        control.value < this.settingForm.get('PRIMER_PRODUCT_SIZE_MIN').setErrors({'invalidMin': true});
        this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = control.value;
        return {'invalidMax': true};
      } 
      control.value < this.settingForm.get('PRIMER_PRODUCT_SIZE_MIN').setErrors(null);
      this.dataService.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = control.value;
      return null;
    };
  }

  tmMinValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_MIN_TM = control.value;      
      return null;
    };
  }

  tmOptValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_OPT_TM = control.value;     
      return null;
    };
  }

  tmMaxValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_MAX_TM = control.value;     
      return null;
    };
  }

  tmDiffValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_PAIR_MAX_DIFF_TM = control.value;
      return null;
    };
  }

  saltCorrectionValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_SALT_CORRECTIONS = control.value;
      return null;
    };
  }

  thermoParamValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      if(this.settingForm == null){
        return null;
      }
      this.dataService.p3Input.PRIMER_TM_FORMULA = control.value;
      return null;
    };
  }


  simpleValidator(paramName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      this.dataService.p3Input[paramName] = control.value;
      return null;
    };
  }

  specValidator(paramName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      this.dataService.specCheckInput[paramName] = control.value;
      return null;
    };
  }
}

