import { Component, OnInit, EventEmitter } from '@angular/core';

import { Primer3Service } from '../primer3.service';
import { P3Service } from '../p3.service';

@Component({
  selector: 'app-submit-area',
  templateUrl: './submit-area.component.html',
  styleUrls: ['./submit-area.component.css']
})
export class SubmitAreaComponent implements OnInit {

  result: any;

  constructor(
    private primer3Service: Primer3Service,
    private p3Serice: P3Service
  ) { }

  ngOnInit() {
  }

  submit(){
    console.log('submit');
    //var task = {};
    //task['input'] = this.p3DataSharingSerice['p3Input'];
    //this.primer3Service.sendP3Request(task)
    //  .then(p3Status => this.getResult(p3Status['result_url']))
  }
  reset(){
    console.log('reset');
  }

  getResult(url){
    this.primer3Service.getP3Result(url)
      .then(p3Result => this.validateResult(p3Result))
      .catch(err => this.getResult(url));
  }
  validateResult(p3Result){
    console.log(p3Result);

  }

}
