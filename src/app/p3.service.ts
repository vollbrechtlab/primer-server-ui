import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class P3Service {
  params = [];

  constructor(private http: Http) {}

  loadParams() {
    return this.http.get('assets/p3-params.json')
                .toPromise()
                .then(res => { this.params = res.json().data; });
  }
}
