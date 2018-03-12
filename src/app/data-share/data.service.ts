import { Injectable } from '@angular/core';
import { P3Params } from './p3-params';
import { P3Input } from './p3-input';
import { SpecCheckInput } from './spec-check-input';

/** Shares all the variables, some basic functions **/
@Injectable()
export class DataService {
  params = {};
  p3Input: P3Input;

  specCheckInput: SpecCheckInput;

  resultUrl: string;

  gc_content = 0;
  length = 0;

  PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS: Array<{}>;
  PRIMER_TM_FORMULA_INPUT_OPTIONS: Array<{}>;

  strListPatt: RegExp;

  p3Result: any;



  constructor() {
    let p3ParamsObject = new P3Params();
    this.params = p3ParamsObject.data;
    this.p3Input = new P3Input();

    this.specCheckInput = new SpecCheckInput;

    this.p3Input.SEQUENCE_TEMPLATE = '';

    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE = [[100, 300]];

    this.PRIMER_SALT_CORRECTIONS_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Schildkraut and Lifson 1965'},
      {value: 1, viewValue: 'SantaLucia 1998'},
      {value: 2, viewValue: 'Owczarzy et. 2004'}
    ];
    this.PRIMER_TM_FORMULA_INPUT_OPTIONS = [
      {value: 0, viewValue: 'Breslauer et al. 1986'},
      {value: 1, viewValue: 'SantaLucia 1998'}
    ];

    this.strListPatt = new RegExp("[0-9]-[0-9]");
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
    if(this.p3Input.SEQUENCE_TEMPLATE.length == 0){
      this.length = 0;
      this.gc_content = 0;
      return;
    }
    var numGc = 0;
    for(var i = 0; i < this.p3Input.SEQUENCE_TEMPLATE.length; i++){
      if(this.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'G' || this.p3Input.SEQUENCE_TEMPLATE[i].toUpperCase() == 'C'){
        ++numGc;
      }
    }
    this.gc_content = Math.round(numGc/this.p3Input.SEQUENCE_TEMPLATE.length*100);
  }

  /**
   * Calculate the product size based on the SEQUENCE_TEMPLATE
   */
  calcProdSize() {
    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][0] = Math.round(this.p3Input.SEQUENCE_TEMPLATE.length/3);
    this.p3Input.PRIMER_PRODUCT_SIZE_RANGE[0][1] = this.p3Input.SEQUENCE_TEMPLATE.length;
  }

}