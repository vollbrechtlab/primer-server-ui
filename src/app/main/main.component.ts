import { Component, OnInit } from '@angular/core';
import { ViewChild , AfterViewInit} from '@angular/core';

import { GENERAL } from '../../environments/general';

import { DataService } from '../data-share/data.service';
import { ServerService } from '../server/server.service';

import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  e = GENERAL; // environement variables

  basicParamsPanel = true;

  resultReady = false;

  @ViewChild(ResultComponent) 
  private resultComponent: ResultComponent

  constructor(
  	private dataService: DataService,
  	private serverService: ServerService
  ) {}

  ngOnInit() {
    
  }

  ngAfterViewInit(){
  }

  submit(){
    console.log('new task submitted', this.dataService.main.task)
  	this.serverService.submitTask(this.dataService.main.task).subscribe(resData => {
      console.log('returned data', resData);
      if(resData.status == 'ok'){
        this.resultComponent.loadResult(resData['taskId']);
        this.resultReady = true;
        this.basicParamsPanel = false;
      } else {
        console.log('error from server');
      }
    });
  }

  reset(){
    console.log('resetting form')
  }


  jumpToResult(id: string){
    window.open('result/' + id, '_blank')
  }

}
