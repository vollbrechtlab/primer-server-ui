import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ResultGetterService {

  constructor(
    private http: Http
  ) { }

  /**
   * Return Promise of result
   * @returns {Promise}
   */
  getResult() {

  }

}
