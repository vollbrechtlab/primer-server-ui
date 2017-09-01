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
    this.createSqChartData();
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  /*
   * Create the sequence chart data
   */
  public createSqChartData():void {
    var sequence_template = "AAAAAAAAAAAGGGGGGGGGCCCCAAAA";
    var targets = [[0, 3],[9, 5]];
    var excluded_regions = [[10, 5]];

    let data = [];
    for(let i = 0; i < targets.length; i++){
      data.push({data: [targets[i][1]], label: 'Target'});
    }
    
    //let clone = JSON.parse(JSON.stringify(this.barChartData));
    //console.log(clone);

    //clone = data;
    //this.barChartData.length = 0;
    this.barChartData = [
      {data: [65], label: 'Excluded'},
      {data: [28], label: 'Target'},
      {data: [50], label: 'Normal'},
      {data: [17], label: 'Excluded'}
    ];
    //console.log(this.barChartData)

    this.chart.ngOnChanges({} as SimpleChanges);

    //clone = JSON.parse(JSON.stringify(this.chartColors));
    //clone[0].data = data;
    //this.chartColors = clone;
  }
}