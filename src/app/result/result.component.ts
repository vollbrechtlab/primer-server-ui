import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ChartDrawer } from './chart-drawer';

import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: string;

  task: any;
  taskResult: any;
  chartDrawer: any;
  status: string;


  public constructor(
  	private route: ActivatedRoute,
  	private serverService: ServerService
  ) {
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);

    this.task = []
    this.task['input_data'] = {"PRIMER_PICK_LEFT_PRIMER": true, "PRIMER_PICK_RIGHT_PRIMER": true, "PRIMER_PICK_INTERNAL_OLIGO": true, "PRIMER_EXPLAIN_FLAG": true, "PRIMER_TASK": "generic", "SEQUENCE_TEMPLATE": "ACAAGATGCCATTGTCCCCCGGCCTCCTGCTGCTGCTGCTCTCCGGGGCCACGGCCACCGCTGCCCTGCCCCTGGAGGGTGGCCCCACCGGCCGAGACAGCGAGCATATGCAGGAAGCGGCAGGAATAAGGAAAAGCAGCCTCCTGACTTTCCTCGCTTGGTGGTTTGAGTGGACCTCCCAGGCCAGTGCCGGGCCCCTCATAGGAGAGGAAGCTCGGGAGGTGGCCAGGCGGCAGGAAGGCGCACCCCCCCAGCAATCCGCGCGCCGGGACAGAATGCCCTGCAGGAACTTCTTCTGGAAGACCTTCTCCTCCTGCAAATAAAACCTCACCCATGAATGCTCACGCAAGTTTAATTACAGACCTGAA", "PRIMER_MAX_NS_ACCEPTED": 1, "PRIMER_PRODUCT_SIZE_RANGE": [75, 100], "PRIMER_MAX_SIZE": 21, "SEQUENCE_EXCLUDED_REGION": [[90, 50]], "SEQUENCE_TARGET": [[100, 50]], "SEQUENCE_ID": "example", "PRIMER_MIN_SIZE": 15, "PRIMER_OPT_SIZE": 18};

  	this.loadResult('http://vollbrechtlab-dev.gdcb.iastate.edu:8001/result/' + this.id);
  }

  // load result from the server
  loadResult(url: string) {
    this.serverService.getJson(url).subscribe(data => {
      console.log(data)
      if(data.status == 'ok'){
        this.taskResult = data;
        this.chartDrawer.setInputData(this.task["input_data"]);
        this.chartDrawer.setResultData(this.taskResult);
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

}
