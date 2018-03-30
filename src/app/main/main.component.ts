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
    //let testP3Input = {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_PICK_INTERNAL_OLIGO": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18};
  	let task = {};
    task['format'] = 'better';
    //task['primer3_data'] = testP3Input;
    task['primer3_data'] = this.dataService.p3Input;
    task['spec_check'] = this.dataService.specCheckInput;
    console.log('new task submitted', task)
  	this.serverService.submitTask(task).subscribe(data => {
      console.log('returned data', data);
      if(data.status == 'ok'){
        this.resultComponent.loadResult(data['taskId']);
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
