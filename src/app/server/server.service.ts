import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ServerService {

  url: string;

  constructor (
    private http: Http
  ) {
    this.url = 'http://localhost:8001/v1.02/';
  }

  // recursiely remove keys with null
  cleanObj(obj){
    Object.keys(obj).forEach(key => {
      if (obj[key] && typeof obj[key] === 'object') this.cleanObj(obj[key]);
      else if (obj[key] == null) delete obj[key];
    });
    return obj;
  }

  // post request
  post(data, url) : Observable<any>{
    return this.http.post(url, data)
                    .map((res:Response) => res.json());
  }

  // get json request
  getData(url: string) : Observable<any> {
    return this.http.get(url);
  }

  // get json request
  getJson(url: string) : Observable<any> {
    console.log(url)
    return this.http.get(url)
                    .map((res:Response) => res.json());
  }

  // load result from the server
  getResult(id:string) : Observable<any> {
    return this.getJson(this.url+'result/'+id);
  }

  // submit input data to the server
  submitTask(data) : Observable<any>{
    data = this.cleanObj(data);
    return this.post(data, this.url);
  }

  getResultURL(id : string) : string {
    return this.url + '/' + id;
  }
}
