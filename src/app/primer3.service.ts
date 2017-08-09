import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import {P3Input} from './p3-input'
import {P3Result} from './p3-result'
import {P3Status} from './p3-status'

@Injectable()
export class Primer3Service {

  private apiUrl = 'http://localhost:5000/primer-rest-api/v1.0/primer';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  /**
   * Send primer3 request to the server
   * @param {P3Input} p3Input primer3 input with some metadata
   * @returns {Promise} promise of primer3 status
   */
  sendP3Request(p3Input: P3Input): Promise<P3Status> {
    return this.http
      .post(this.apiUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as P3Status)
      .catch(this.handleError);
  }

  /**
   * Get primer3 result from the server
   * @param {string} url url of the result data
   * @returns {Promise} promise of primer3 result with some metadata
   */
  getP3Result(url: string): Promise<P3Result> {
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json().data as P3Result)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 

}
