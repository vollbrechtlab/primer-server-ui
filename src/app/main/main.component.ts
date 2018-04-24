import { Component, OnInit } from '@angular/core';
import { ViewChild , AfterViewInit} from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

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
    private sanitizer: DomSanitizer
  ) {
    this.baseHref = window.location.href;
  }

  ngOnInit() {
    // add some logic to file-input
    var this2 = this;
    document.getElementById('import-button')
      .addEventListener("click", function(){
        document.getElementById('file-input').click();
      });
    document.getElementById('file-input')
      .addEventListener('change', function(e){
          var file = (<HTMLInputElement>e.target).files[0];
          if (!file) {
            return;
          }
          var reader = new FileReader();
          reader.onload = function(e) {
            var contents = this.result;
            var task = JSON.parse(contents);

            // actually import task here
            if(!task['primer3_data'] || !task['spec_check_data']){
              console.error('wrong task file')
              return;
            }
            this2.dataService.main.task = task;
            this2.updateSettings(task);
          };
          reader.readAsText(file);
          
      }, false);
  }

  ngAfterViewInit(){
  }

  submit(){
    console.log('new task submitted', this.dataService.main.task)
  	this.serverService.submitTask(this.dataService.main.task).subscribe(resData => {
      console.log('returned data', resData);
      if(resData.status == 'ok'){
        this.resultComponent.url = window.location.href.slice(0, -5)+'/result/'+resData['taskId'];
        this.resultComponent.loadResult(resData['taskId']);
        this.resultReady = true;
        this.basicParamsPanel = false;
      } else {
        console.error('error from server');
      }
    });
  }

  resetSettings(){
    console.log('reseting settings');
    this.dataService.resetMain();
    this.basicParamsComponent.reset();
    this.additionalParamsComponent.reset();
    this.specificityCheckingComponent.reset();
  }

  updateSettings(task){
    console.log('updating task', task);
    this.dataService.main.task = task;
    this.basicParamsComponent.reset();
    this.additionalParamsComponent.reset();
    this.specificityCheckingComponent.reset();
  }


  jumpToResult(id: string){
    window.open('result/' + id, '_blank')
  }

  exportSettings(){
    console.log('exporting settings')
    var theJSON = JSON.stringify(this.dataService.main.task);
    var element = document.createElement('a');
    element.setAttribute('href', "data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    element.setAttribute('download', "primer-server-task.json");

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click(); // simulate click
    document.body.removeChild(element);
  }
}
