import { Component, OnInit, ViewChild, SimpleChanges } from '@angular/core';
import {BaseChartDirective} from 'ng2-charts/ng2-charts';
 
@Component({
  selector: 'app-sq-bar-chart',
  templateUrl: './sq-bar-chart.component.html',
  styleUrls: ['./sq-bar-chart.component.css']
})
export class SqBarChartComponent implements OnInit {
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    }
  };
  public barChartLabels:string[] = ['Sequence'];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [];

  public chartColors: any[] = [];

  ngOnInit() {
    this.barChartData = [
      {data: [65], label: 'Excluded'},
      {data: [28], label: 'Target'},
      {data: [50], label: 'Normal'},
      //{data: [17], label: 'Excluded'}
    ];

    this.chartColors = [
      {backgroundColor:"red"},
      {backgroundColor:"grey"},
      {backgroundColor:"green"},
      {backgroundColor:"red"}
    ];

    
  }
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
    this.createSqChartData("AAAAAAAAAAAGGGGGGGGGCCCCAAAA", [[0, 3],[9, 5]], [[10, 5]]);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  /*
   * Create the sequence chart data
   */
  public createSqChartData(sequence_template:string, targets:Array<Array<number>>, excluded_regions:Array<Array<number>>):void {

    this.barChartData.length = 0;
    this.chartColors.length = 0;


    for(let i = 0; i < targets.length; i++){
      if(i == 0){
        if(targets[i][0] == 0){
          this.barChartData.push({data: [targets[i][1]], label: 'Target'});
          this.chartColors.push({backgroundColor: "green"});
        } else {
          this.barChartData.push({data: [targets[i][1]], label: 'Normal'});
          this.chartColors.push({backgroundColor: "grey"});
          this.barChartData.push({data: [targets[i][1]], label: 'Target'});
          this.chartColors.push({backgroundColor: "green"});
        }
      } else {
        if(targets[i-1][0]+targets[i-1][1] == targets[i][0]){
          this.barChartData.push({data: [targets[i][1]], label: 'Target'});
          this.chartColors.push({backgroundColor: "green"});
        } else {
          this.barChartData.push({data: [targets[i][1]], label: 'Normal'});
          this.chartColors.push({backgroundColor: "grey"});
          this.barChartData.push({data: [targets[i][1]], label: 'Target'});
          this.chartColors.push({backgroundColor: "green"});
        }
      }
    }

    console.log(this.barChartData)
    this.updateChart();

  }

  public updateChart(){
    this.chart.ngOnChanges({});
  }
}