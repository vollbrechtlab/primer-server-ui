import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild , AfterViewInit} from '@angular/core';

import { ResultComponent } from '../result/result.component';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit, AfterViewInit {

  id: string;

  taskResult: any;
  chartDrawer: any;
  status: string;

  @ViewChild(ResultComponent) 
  private resultComponent: ResultComponent;

  public constructor(
  	private route: ActivatedRoute,
  	private serverService: ServerService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  	
  }

  ngAfterViewInit(){
    this.resultComponent.loadResult(this.id);
  }

}
