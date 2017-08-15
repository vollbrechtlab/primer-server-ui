import { Injectable } from '@angular/core';
import {P3Params} from './p3-params';

@Injectable()
export class P3Service {
  params = {};

  constructor() {
    let p3ParamsObject = new P3Params();
    this.params = p3ParamsObject.data;
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
