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
  acceptedRangeCodes = [['[',']'],['<','>']];

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
        return {invalidPos: i+1, invalidCode: sequence[i]};
      }
    }
    return null;
  }

  sequenceTemplateValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let sequence = control.value;
      
      let message = this.checkNucleotideSequence(sequence, this.normalBaseCodes);
      if(message == null){
        this.p3Service.params['SEQUENCE_TEMPLATE']['value'] = sequence;
      }
      return {'invalidSequence': message};
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

  pickOptionsValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      let message = {};
      if(control.get('PRIMER_PICK_LEFT_PRIMER')){

      }
      return message;
    };
  }
}
