import { Injectable } from '@angular/core';
//import { P3Params } from './p3-params';
//import { P3Input } from './p3-input';
//import { SpecCheckInput } from './spec-check-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class ConstantsService {
  // for basic settings
  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS = [
    {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
    {value: 1, viewValue: 'SantaLucia 1998'},
    {value: 2, viewValue: 'Owczarzy et. 2004'}
  ];
  PRIMER_TM_FORMULA_INPUT_OPTIONS = [
    {value: 0, viewValue: 'Breslauer et al. 1986'},
    {value: 1, viewValue: 'SantaLucia 1998'}
  ];

  // for specificity checking
  GENOME_OPTIONS = [
    {value: 'maize_v3', viewValue: 'Maize B73 AGPv3'},
    {value: 'maize_v4', viewValue: 'Maize V4'}
  ];

  API_URL:string = 'http://localhost:8001/v1.03/';

  constructor() {

  }

}