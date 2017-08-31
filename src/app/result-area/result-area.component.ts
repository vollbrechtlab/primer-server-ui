import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { P3Service } from '../p3.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  p3Result: any;
  subscription: Subscription;

  constructor(
    private p3DataSharingSerice: P3Service
  ) { 

  }

  ngOnInit() {
    
  }


}
