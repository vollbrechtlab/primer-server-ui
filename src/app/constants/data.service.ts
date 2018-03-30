import { Injectable } from '@angular/core';
//import { P3Params } from './p3-params';
//import { P3Input } from './p3-input';
//import { SpecCheckInput } from './spec-check-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class ConstantsService {
  // for specificity checking
  GENOME_OPTIONS = [
    {value: 'maize_v3', viewValue: 'Maize B73 AGPv3'},
    {value: 'maize_v4', viewValue: 'Maize V4'}
  ];
  constructor() {

  }

}