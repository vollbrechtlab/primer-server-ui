import { Injectable } from '@angular/core';
import {P3Params} from './p3-params';
import {P3Input} from './p3-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class P3Service {
  params = {};
  p3Input: P3Input;

  gc_content: number;

  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS: Array<{}>;
  PRIMER_TM_FORMULA_INPUT_OPTIONS: Array<{}>;

  constructor() {
    let p3ParamsObject = new P3Params();
    this.params = p3ParamsObject.data;
    this.p3Input = new P3Input();

    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE = [[]];

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
    let arr = [];
    for(let i = 0; i < rangelist.length; i++){
      
    }
    arr.push([]);
    return arr;
  }

  convertArrToStrList(arr: Array<Array<number>>){
    let strList = "";
    for(let i = 0; i < arr.length; i++){
      strList += arr[i][0] + "-" + arr[i][1] + " ";
    }
    return strList;
  }

  calcGcContent() {
    if(this.p3Input.SEQUENCE_TEMPLATE.length == 0){
      return 0;
    }
    var numGc = 0;
    for(var i = 0; i < this.p3Input.SEQUENCE_TEMPLATE.length; i++){
      if(this.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'G' || this.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'C'){
        ++numGc;
      }
    }
    this.gc_content = Math.round(numGc/this.p3Input.SEQUENCE_TEMPLATE.length*100);
  }

  calcProdSize() {
    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = Math.round(this.p3Input.SEQUENCE_TEMPLATE.length/3);
    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = this.p3Input.SEQUENCE_TEMPLATE.length;
  }

}
