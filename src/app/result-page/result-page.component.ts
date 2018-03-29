import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChartDrawer } from './chart-drawer';

import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result-page',
  templateUrl: './result-page.component.html',
  styleUrls: ['./result-page.component.css']
})
export class ResultPageComponent implements OnInit {

  id: string;

  taskResult: any;
  chartDrawer: any;
  status: string;


  public constructor(
  	private route: ActivatedRoute,
  	private serverService: ServerService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);

  	this.loadResult(this.id);
  }

  // load result from the server
  loadResult(id) {
    this.serverService.getResult(id).subscribe(data => {
      console.log('taskResult', data);
      if(data.status == 'in process'){
        this.status = 'in process';
        // reload the result
        let that = this;
        setTimeout(function(){
          that.loadResult(id);
        }, 1000)
      }
      else if(data.status == 'ok'){
        this.taskResult = data;
        this.chartDrawer.setInputData(this.taskResult['task']['primer3_data']);
        console.log(this.taskResult['result'])
        this.chartDrawer.setResultData(this.taskResult['result']);
        this.chartDrawer.draw();
        this.chartDrawer.primerDiscFunc = function(e){
          console.log(e)
        }
        this.status = 'ok';
      } else {
        console.log('error from server');
        this.status = 'error';
        this.taskResult = null;
        this.chartDrawer.clear();
      }
      
    });
  }

}
