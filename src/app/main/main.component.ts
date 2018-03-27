import { Component, OnInit } from '@angular/core';

import { DataService } from '../data-share/data.service';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

    /* General */
  title = 'Primer Server';
  version = '2.2.0'; 

  firstPanel = false;

  resultReady = false;
  resultHTML: any;

  constructor(
  	private dataService: DataService,
  	private serverService: ServerService
  ) {}

  ngOnInit() {}

  submit(){
    let testP3Input = {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_PICK_INTERNAL_OLIGO": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18};
  	let task = {};
    task['format'] = 'better';
    task['primer3_data'] = testP3Input;//this.dataService.p3Input;
    task['spec_check'] = this.dataService.specCheckInput;
    console.log('new task submitted', task)
  	this.serverService.submitTask(task).subscribe(data => {
      console.log(data)
      if(data.status == 'ok'){
        console.log('returned data', data);
        this.jumpToResult(data['taskId']);
      } else {
        console.log('error from server');
      }
    });
  }

  reset(){

  }


  jumpToResult(id: string){
    window.open('result/' + id, '_blank')
  }

  // load result from the server
  loadResult(url: string) {
    this.serverService.getJson(url).subscribe(data => {
      console.log(data)
      if(data.status == 'ok'){
        this.resultHTML = data.result;
        this.resultReady = true;
      } else {
        console.log('error from server');
      }
      
    });
  }
}
