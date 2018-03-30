import { Injectable } from '@angular/core';
import { P3Input } from './p3-input';
import { SpecCheckInput } from './spec-check-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class DataService {
  p3Input: P3Input = new P3Input();
  specCheckInput: SpecCheckInput = new SpecCheckInput;

  // for sequence template in basic settings
  gc_content = 0;
  length = 0;
}