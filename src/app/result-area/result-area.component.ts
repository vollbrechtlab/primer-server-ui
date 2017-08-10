import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { P3DataSharingService } from '../p3-data-sharing.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {

  p3Result: any;
  subscription: Subscription;

  constructor(
    private p3DataSharingSerice: P3DataSharingService
  ) { 
    this.subscription = this.p3DataSharingSerice.getP3Result()
      .subscribe(result => { 
        this.p3Result = result; 
    });
  }

  ngOnInit() {
    
  }


}
