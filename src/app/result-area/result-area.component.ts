import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import {Observable} from 'rxjs/Observable';

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

  statusData: string[];

  constructor(
    private p3Sevice: P3Service,
    private primerServerService: PrimerServerService,
    private elRef:ElementRef
  ) { 
    
  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);
    
    this.statusData = [];
    this.statusData
    this.statusData['status'] = null;
    this.statusData['error'] = "Error occured!!";
    this.statusData['ok'] = "ok!!!!";
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

    console.log(this.task)

    this.primerServerService.addTask(this.task).subscribe(data => {
      if(data.status == 'ok'){
        console.log(data);
        this.loadResult(data.result_url);
      } else {
        console.log('error from server');
        while (this.statusData.length) { this.statusData.pop(); }
        this.statusData.push('error');
        this.taskResult = null;
        this.chartDrawer.clear();
      }
    });
  }

  // submit using test data
  testSubmit(){
    console.log(this.task)

    this.task = {"input_data": {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18}, "format": "better"};

    this.primerServerService.addTask(this.task).subscribe(data => {
      if(data.status == 'ok'){
        console.log(data);
        this.loadResult(data.result_url);
      }
    });
  }

  // reset the form
  reset(){
    console.log('reset');
  }

  // load result from the server
  loadResult(url: string) {
    this.primerServerService.getResult(url).subscribe(data => {
      this.taskResult = data;//JSON.stringify(data, null, 4)
      console.log(data);

      if(data.status == 'ok'){
        this.chartDrawer.setInputData(this.task["input_data"]);
        this.chartDrawer.setResultData(data);
        this.chartDrawer.draw();
        this.chartDrawer.primerDiscFunc = function(e){
          console.log(e)
        }
        while (this.statusData.length) { this.statusData.pop(); }
        this.statusData.push('ok');
      } else {
        console.log('error from server');
        while (this.statusData.length) { this.statusData.pop(); }
        this.statusData.push('error');
        this.taskResult = null;
        this.chartDrawer.clear();
      }
      
    });
  }


}
