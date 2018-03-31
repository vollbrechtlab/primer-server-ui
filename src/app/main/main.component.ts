import { Component, OnInit } from '@angular/core';
import { ViewChild , AfterViewInit} from '@angular/core';
import { PlatformLocation } from '@angular/common';

import { GENERAL } from '../../environments/general';

import { DataService } from '../data-share/data.service';
import { ServerService } from '../server/server.service';

import { BasicParamsComponent } from '../basic-params/basic-params.component';
import { AdditionalParamsComponent } from '../additional-params/additional-params.component';
import { SpecificityCheckingComponent } from '../specificity-checking/specificity-checking.component';
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {

  e = GENERAL; // environement variables
  baseHref;

  basicParamsPanel = true;

  resultReady = false;

  @ViewChild(BasicParamsComponent) 
  private basicParamsComponent: BasicParamsComponent;

  @ViewChild(AdditionalParamsComponent)
  private additionalParamsComponent: AdditionalParamsComponent;

  @ViewChild(SpecificityCheckingComponent)
  private specificityCheckingComponent: SpecificityCheckingComponent;

  @ViewChild(ResultComponent) 
  private resultComponent: ResultComponent;

  constructor(
  	private dataService: DataService,
  	private serverService: ServerService,
    platformLocation: PlatformLocation
  ) {
    this.baseHref = (platformLocation as any).location.baseHref;
  }

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
        console.error('error from server');
      }
    });
  }

  reset(){
    console.log('resetting form')
    this.basicParamsComponent.reset()
    this.additionalParamsComponent.reset()
    this.specificityCheckingComponent.reset()
  }


  jumpToResult(id: string){
    window.open('result/' + id, '_blank')
  }

}
