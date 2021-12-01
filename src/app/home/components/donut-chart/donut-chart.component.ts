import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-donut-chart',
  templateUrl: './donut-chart.component.html',
  styleUrls: ['./donut-chart.component.scss']
})
export class DonutChartComponent implements OnInit, OnChanges {

  @Input() dataAspersor!: any[];
  humedad: number[] = [];
  temperatura: number[] = [];

  public lineChartData: ChartDataSets[] = [];



  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartLabels: Label[] = [];



  public lineChartOptions: ChartOptions = {

    responsive: true,
    legend: {
      display: false,
    }

  };



  public lineChartLegend = true;

  public lineChartType = 'line';

  public lineChartPlugins = [];

  constructor() { }


  ngOnChanges(changes: SimpleChanges): void {
    if(changes) {
      this.setData();
    }
  }

  ngOnInit(): void {
    this.setData()
  }

  setData() {
    //this.humedad = this.dataAspersor.map(data => data.humedad);
    //this.temperatura = this.dataAspersor.map(data => data.temperatura);

    this.lineChartData = [ { data: [1,2], label: 'Humedad' , backgroundColor: ["#398cbf", "#398cbf63"], borderWidth: 0.5},  ]
    this.lineChartLabels = ['1', '2' ];
  }

}
