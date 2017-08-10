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

  constructor() { }

}
