import { Component } from '@angular/core';
 
@Component({
  selector: 'app-sq-bar-chart',
  templateUrl: './sq-bar-chart.component.html',
  styleUrls: ['./sq-bar-chart.component.css']
})
export class SqBarChartComponent {
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
  public barChartLabels:string[] = ['Sequence1', "Sequence2"];
  public barChartType:string = 'horizontalBar';
  public barChartLegend:boolean = true;
 
  public barChartData:any[] = [
    {data: [65], label: 'Excluded'},
    {data: [28], label: 'Target'},
    {data: [28], label: 'Normal'},
    {data: [28], label: 'Excluded'}
  ];

  public chartColors: any[] = [
    {backgroundColor:"red"},
    {backgroundColor:"grey"}
  ];
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }
 
  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}