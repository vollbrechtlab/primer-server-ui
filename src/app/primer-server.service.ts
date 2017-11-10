import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrimerServerService {

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

  // add task to the server
  addTask(task){
    task = this.cleanObj(task);
    console.log('task', task);
    return this.http.post('http://vollbrechtlab-dev.gdcb.iastate.edu:8001', task)
                    .map((res:Response) => res.json());
  }

  // get result from the server
  getResult(url: string) {
    return this.http.get(url)
                    .map((res:Response) => res.json());
  }

}
