import { Injectable } from '@angular/core';
import { P3Input } from './p3-input';
import { SpecCheckInput } from './spec-check-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class DataService {

  main:{task: {primer3_data:P3Input, spec_check:SpecCheckInput, format:string}, gc_content:number, length:number} = {
    task: {
      primer3_data: new P3Input(),
      spec_check: new SpecCheckInput,
      format: 'better'
    },
    // for sequence template in basic settings
    gc_content: 0,
    length: 0
  };

}