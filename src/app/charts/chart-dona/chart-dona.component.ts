import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';

@Component({
  selector: 'app-chart-dona',
  templateUrl: './chart-dona.component.html',
  styleUrls: ['./chart-dona.component.css']
})
export class ChartDonaComponent implements OnInit {
  // Doughnut
  public doughnutChartLabels: Label[] = ['ERROR', 'INFO', 'WARNINGS'];
  public doughnutChartData: MultiDataSet = [
    [100, 450, 100],[2, 22, 4],[4, 2, 1]
  ];
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }
}