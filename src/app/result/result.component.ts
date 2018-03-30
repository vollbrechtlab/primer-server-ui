import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

import { ChartDrawer } from './chart-drawer';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: string;
  url: string;

  taskResult: any;
  chartDrawer: any;
  status: string;

  downloadJsonHref;


  public constructor(
  	private serverService: ServerService,
    private sanitizer: DomSanitizer
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
    this.loadResultHelper(id);
    this.generateDownloadJsonUri()
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

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.taskResult);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
    console.log(this.downloadJsonHref)
  }

}
