import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {

  @Input() dataAspersor!: any[];
  humedad: number[] = [];
  temperatura: number[] = [];

  public lineChartData: ChartDataSets[] = [];



  //public lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  public lineChartLabels: Label[] = [];



  public lineChartOptions: ChartOptions = {

    responsive: true,

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
    this.lineChartData = [ { data: [1,2,3,4,5], label: 'Humedad' }, { data:[5,3,4,6,7], label: 'Temperatura' },  ]
    this.lineChartLabels = ['1', '2', '3', '4', '5', ];
  }

}
