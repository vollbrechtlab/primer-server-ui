import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PrimerServerService {

  constructor (
    private http: Http
  ) {}

  addTask(task){
    return this.http.post('http://vollbrechtlab-dev.gdcb.iastate.edu:8001', task)
                    .map((res:Response) => res.json());
  }

  getResult(url: string) {
    return this.http.get(url)
                    .map((res:Response) => res.json());
  }

}
