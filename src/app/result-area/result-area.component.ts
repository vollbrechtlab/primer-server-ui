import { Component, OnInit } from '@angular/core';

import { P3DataSharingService } from '../p3-data-sharing.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  p3Result: any;

  constructor(
    private p3DataSharingSerice: P3DataSharingService
  ) { }

  ngOnInit() {
    console.log(this.p3DataSharingSerice.p3Result);
  }

  updateResult(){
    console.log('yey!');
  }

}
