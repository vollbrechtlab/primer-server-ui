import { Component, OnInit } from '@angular/core';

import { ChartDrawer } from './chart-drawer';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: string;  // id of the task
  url: string; // url of the result page

  taskResult: any; // data that contains result and task data
  chartDrawer: any;
  status: string;

  resultApiURL; // 


  public constructor(
  	private serverService: ServerService
  ) {  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);
  }

  test(){
    console.log('test')
  }

  loadResult(id){
    this.id = id;
    this.url = window.location.href.slice(0, -5)+'/result/'+id;
    this.resultApiURL = this.serverService.getResultURL(id);
    this.loadResultHelper(id);
    
  }

  // load result from the server
  loadResultHelper(id) {
    
    this.serverService.getResult(id).subscribe(data => {
      console.log('taskResult', data);
      if(data.status == 'in process'){
        this.status = 'in process';
        // reload the result
        let that = this;
        setTimeout(function(){
          that.loadResultHelper(id);
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
