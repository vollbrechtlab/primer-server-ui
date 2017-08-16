import { Injectable } from '@angular/core';
import {P3Params} from './p3-params';

@Injectable()
export class P3Service {
  params = {};

  acceptedBaseCodes = ['A','C','G','T','N'];
  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS: Array<{}>;
  PRIMER_TM_FORMULA_INPUT_OPTIONS: Array<{}>;

  constructor() {
    let p3ParamsObject = new P3Params();
    this.params = p3ParamsObject.data;

    this.PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
      {value: 1, viewValue: 'SantaLucia 1998'},
      {value: 2, viewValue: 'Owczarzy et. 2004'}
    ];
    this.PRIMER_TM_FORMULA_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Breslauer et al. 1986'},
      {value: 1, viewValue: 'SantaLucia 1998'}
    ];
  }

  convertRangelistToArr(rangelist: string){
    var arr = [];
    for(let i = 0; i < rangelist.length; i++){
      
    }
    arr.push([]);
    return arr;
  }

  convertArrToRangelist(arr: Array<Array<number>>){
    return null;
  }

}
