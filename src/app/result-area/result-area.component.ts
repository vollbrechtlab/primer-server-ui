import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import { P3Service } from '../p3.service';
import { PrimerServerService } from '../primer-server.service';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.css']
})
export class ResultAreaComponent implements OnInit {
  task: any;
  taskResult: any;
  leftPrimerPoints: string[];
  rightPrimerPoints: string[];
  seqIdx: number[];
  seqLen: number;
  dispInterval: number;
  excludedRegionPoints: string[];
  targetRegionPoints: string[];

  constructor(
    private p3Sevice: P3Service,
    private primerServerService: PrimerServerService
  ) { 
    
  }

  ngOnInit() {
    this.excludedRegionPoints = [];
    this.targetRegionPoints = [];
    this.seqIdx = [];
    this.leftPrimerPoints = [];
    this.rightPrimerPoints = [];
    this.task = {"input_data": {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18}, "format": "better"};
    
    //this.submit();
  }

  submit(){
    console.log('submit');

    this.task = {};
    this.task['format'] = 'better';
    this.task['input_data'] = this.p3Sevice.p3Input;
    this.seqLen = this.task.input_data.SEQUENCE_TEMPLATE.length;

    console.log(this.task)

    this.primerServerService.addTask(this.task).subscribe(data => {
      if(data.status == 'ok'){
        console.log(data);
        this.loadResult(data.result_url);
      }
    });
  }
  reset(){
    console.log('reset');
  }

  loadResult(url: string) {
    this.primerServerService.getResult(url).subscribe(data => {
      this.taskResult = data;//JSON.stringify(data, null, 4)
      console.log(data);

      if(data.status == 'ok'){
        this.createInputRegionPoints();
        this.createSeqIdx();
        this.createPrimerPolygonPoints();
      }
      
    });
  }

  createSeqIdx(){
    let interval = 10;
    // decide intervals
    if(this.seqLen < 100){
      interval = 10;
    } else if(this.seqLen < 500){
      interval = 50;
    } else if(this.seqLen < 1000){
      interval = 100;
    } else if(this.seqLen < 2000){
      interval = 200;
    } 

    let numIdx = Math.floor(this.seqLen/interval);
    let max = interval*numIdx;
    this.dispInterval = interval/max*500;

    for(let i = 0; i <= numIdx; i++){
      this.seqIdx.push(i*interval);
    }
  }

  createPrimerPolygonPoints(){
    for(let i = 0; i < this.taskResult.result.pairs.length; i++){
      let lstart = this.taskResult.result.pairs[i].PRIMER_LEFT.START/this.seqLen*550 + 50;
      let lend = (this.taskResult.result.pairs[i].PRIMER_LEFT.START+this.taskResult.result.pairs[i].PRIMER_LEFT.LENGTH)/this.seqLen*550 + 50;
      let rstart = this.taskResult.result.pairs[i].PRIMER_RIGHT.START/this.seqLen*550 + 50;
      let rend = (this.taskResult.result.pairs[i].PRIMER_RIGHT.START+this.taskResult.result.pairs[i].PRIMER_RIGHT.LENGTH)/this.seqLen*550 + 50;
      this.leftPrimerPoints.push(lstart+","+(35*i+35)+" "+lstart+","+(35*i+40)+" "+lend+","+(35*i+40)+" "+lend+","+(35*i+35));
      this.rightPrimerPoints.push(rstart+","+(35*i+37)+" "+rstart+","+(35*i+42)+" "+rend+","+(35*i+42)+" "+rend+","+(35*i+37));
    }
  }

  createInputRegionPoints(){
    for(let i = 0; i < this.task.input_data.SEQUENCE_EXCLUDED_REGION.length; i++){
      let start = this.task.input_data.SEQUENCE_EXCLUDED_REGION[i][0];
      let end = this.task.input_data.SEQUENCE_EXCLUDED_REGION[i][0]+this.task.input_data.SEQUENCE_EXCLUDED_REGION[i][1];
      this.excludedRegionPoints.push(start+",0 "+start+",4 "+end+",4 "+end+",0");
    }
    for(let i = 0; i < this.task.input_data.SEQUENCE_TARGET.length; i++){
      let start = this.task.input_data.SEQUENCE_TARGET[i][0];
      let end = this.task.input_data.SEQUENCE_TARGET[i][0]+this.task.input_data.SEQUENCE_TARGET[i][1];
      this.targetRegionPoints.push(start+",3 "+start+",7 "+end+",7 "+end+",3");
    }
  }

  getNumDigit(n: number): number{
    return n.toString().length;
  }
}
