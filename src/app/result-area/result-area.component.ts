import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { SettingFormValidationService } from '../setting-form-validation.service';
import { P3Service } from '../p3.service';
import { PrimerServerService } from '../primer-server.service';
import { ChartDrawer } from '../chart-drawer';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {
  task: any;
  taskResult: any;
  chartDrawer: any;

  status: string;

  constructor(
    private p3Sevice: P3Service,
    private primerServerService: PrimerServerService,
    private elRef:ElementRef,
    private sfvService:SettingFormValidationService
  ) { 
    
  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);
    
    //this.testSubmit();

  }

  ngAfterViewInit(){

  }

  // submit the input to the server
  submit(){
    console.log('submit');

    this.task = {};
    this.task['format'] = 'better';
    this.task['input_data'] = this.p3Sevice.p3Input;

    this.addTask(this.task);
  }

  addTask(task){
    this.primerServerService.addTask(task).subscribe(data => {
      if(data.status == 'ok'){
        console.log(data);
        this.loadResult(data.result_url);
      } else {
        console.log('error from server');
        this.status = 'error';
        this.taskResult = null;
        this.chartDrawer.clear();
      }
    });
  }

  // submit using test data
  testSubmit(){
    this.task = {"input_data": {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_PICK_INTERNAL_OLIGO": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18}, "format": "better"};

    this.addTask(this.task);
  }

  // reset the form
  reset(){
    console.log('reset');
  }

  // load result from the server
  loadResult(url: string) {
    this.primerServerService.getResult(url).subscribe(data => {
      data = this.resultCleaner(data);

      if(data.status == 'ok'){
        this.taskResult = data;
        this.chartDrawer.setInputData(this.task["input_data"]);
        this.chartDrawer.setResultData(data);
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

  resultCleaner(data){
    console.log(data);
    return data;
  }


}
