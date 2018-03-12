import { Component } from '@angular/core';

import { DataService } from './data-share/data.service';
import { ServerService } from './server/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /* General */
  title = 'Primer Server';
  version = '2.2.0'; 

  firstPanel = false;

  constructor(
  	private dataService: DataService,
  	private serverService: ServerService
  ) {}

  submit(){
    let testP3Input = {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_PICK_INTERNAL_OLIGO": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18};
  	let task = {};
    task['input_data'] = testP3Input;//this.dataService.p3Input;
    task['spec_check'] = this.dataService.specCheckInput;
    console.log(task)
  	this.serverService.post(task, 'http://vollbrechtlab-dev.gdcb.iastate.edu:8001').subscribe(data => {
      if(data.status == 'ok'){
        console.log(data);
        //this.loadResult(data.result_url);
      } else {
        console.log('error from server');
      }
    });
  }

  reset(){

  }
}
