import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class P3DataSharingService {

  // primer3 input
  p3Input = {};
  // specificity checking 
  sChecking = {};
  // primer3 result

  private p3Result = new Subject<any>();

  changeP3Result(result) {
    this.p3Result.next(result)
  }
  clearP3Result(){
    this.p3Result.next();
  }
  getP3Result(): Observable<any> {
    return this.p3Result.asObservable();
  }

  constructor() { 
    this.p3Input['SEQUENCE_TEMPLATE'] = "";
    this.p3Input['PRIMER_PICK_LEFT_PRIMER'] = true;
    this.p3Input['SEQUENCE_PRIMER'] = "";
    this.p3Input['PRIMER_PICK_INTERNAL_OLIGO'] = false;
    this.p3Input['SEQUENCE_INTERNAL_OLIGO'] = "";
    this.p3Input['PRIMER_PICK_RIGHT_PRIMER'] = true;
    this.p3Input['SEQUENCE_PRIMER_REVCOMP'] = "";
    this.p3Input['PRIMER_PRODUCT_SIZE_RANGE'] = [[]];
    this.p3Input['SEQUENCE_TARGET'] = null;
    this.p3Input['SEQUENCE_EXCLUDED_REGION'] = null;
    this.p3Input['PRIMER_MIN_TM'] = 57.0;
    this.p3Input['PRIMER_OPT_TM'] = 60.0;
    this.p3Input['PRIMER_MAX_TM'] = 63.0;
    this.p3Input['PRIMER_PAIR_MAX_DIFF_TM'] = 3;
    this.p3Input['PRIMER_SALT_CORRECTIONS'] = 1;
    this.p3Input['PRIMER_TM_FORMULA'] = 1;
  }

}
