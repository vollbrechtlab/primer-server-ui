import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';
//import { ScrollToService } from 'ng2-scroll-to-el';

import { ChartDrawer } from './chart-drawer';
import { ServerService } from '../server/server.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  id: string;  // id of the task
  url: string; // url of the result page
  csvUrl: string;
  taskResult: any; // data that contains result and task data
  chartDrawer: any;
  status: string;
  result: any;

  resultTables: any;
  displayedColumns = ['name', 'lPrimer', 'rPrimer'];

  commonInfoTables: any;
  commonInfoColumns = ['name', 'value'];

  public constructor(
  	private serverService: ServerService
  ) {  }

  ngOnInit() {
    this.chartDrawer = new ChartDrawer('canvasc',500,200);
  }

  loadResult(id){
    this.id = id;
    this.serverService.setConfig().subscribe(data => {
          this.csvUrl = this.serverService.getResultCSVURL(id);

      this.loadResultHelper(id);
    })
    
  }

  // load result from the server
  loadResultHelper(id) {
    
    this.serverService.getResult(id).subscribe(data => {
      console.log('taskResult', data);
      if(data.status == 'in process'){
        this.status = 'in process';
        // reload the result
        let that = this;
        setTimeout(function(){
          that.loadResultHelper(id);
        }, 1000)
      }
      else if(data.status.includes('ok')){
        this.taskResult = data;
        this.chartDrawer.setInputData(this.taskResult['task']['primer3_data']);
        this.result = this.taskResult['result'];
        this.chartDrawer.setResultData(this.result);
        this.chartDrawer.draw();
        this.chartDrawer.primerDiscFunc = function(e){
          console.log(e)
        }
        this.status = data.status;

        this.resultTables = [];
        this.commonInfoTables = [];
        for(let pair of this.result.pairs){
          this.resultTables.push([]);
          for(let name in pair.PRIMER_LEFT){
            this.resultTables[this.resultTables.length-1].push({name: name, lPrimer: pair.PRIMER_LEFT[name], rPrimer:pair.PRIMER_RIGHT[name]});
          }
          if (pair.targets == undefined){
            this.commonInfoTables.push([
              {name:'Any TH', value: pair.COMPL_ANY_TH},
              {name:'End TH', value: pair.COMPL_END_TH}
            ]);
          } else {
            this.commonInfoTables.push([
              {name:'Any TH', value: pair.COMPL_ANY_TH},
              {name:'End TH', value: pair.COMPL_END_TH},
              {name:'Targets', value: pair.targets, color:'blue'},
              {name:'Off Targets', value: pair.off_targets, color:'red'},
            ]);
          }
        }
        console.log('resultTable', this.resultTables);

      } else {
        console.log('error from server');
        this.status = 'error';
        this.taskResult = null;
        this.chartDrawer.clear();
      }
      
    });
  }


}
