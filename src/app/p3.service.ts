import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class P3Service {

  constructor(private http: Http) {}

    getParams() {
      return this.http.get('assets/p3-params.json')
                  .toPromise()
                  .then(res => <any[]> res.json().data)
                  .then(data => { return data; });
    }

}