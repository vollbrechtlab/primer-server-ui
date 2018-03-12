import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ServerService {

  constructor (
    private http: Http
  ) {}

  // recursiely remove keys with null
  cleanObj(obj){
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') this.cleanObj(obj[key]);
      else if (obj[key] == null) delete obj[key];
    });
    return obj;
  }

  // post request
  post(data, url){
    data = this.cleanObj(data);
    return this.http.post(url, data)
                    .map((res:Response) => res.json());
  }

  // get json request
  getJson(url: string) {
    return this.http.get(url)
                    .map((res:Response) => res.json());
  }
}
