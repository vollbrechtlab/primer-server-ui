import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class Primer3Service {

  private apiUrl = 'http://10.25.37.109:5000/primer-rest-api/v1.0/primer';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(
    private http: Http
  ) { }

  /**
   * Send primer3 request to the server
   * @param {P3Input} p3Input primer3 input with some metadata
   * @returns {Promise} promise of primer3 status
   */
  sendP3Request(p3Input): Promise<{}> {
    return this.http
      .post(this.apiUrl, JSON.stringify(p3Input), {headers: this.headers})
      .toPromise()
      .then(res => res.json())
      .catch(this.handleError);
  }

  /**
   * Get primer3 result from the server
   * @param {string} url url of the result data
   * @returns {Promise} promise of primer3 result with some metadata
   */
  getP3Result(url: string): Promise<{}> {
    return this.http
      .get(url)
      .toPromise()
      .then(response => response.json() as {})
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  } 

}
