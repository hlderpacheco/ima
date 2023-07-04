import { Component,OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { ChartsService } from "../../services/charts.service";
import { Color, ScaleType } from '@swimlane/ngx-charts';

import { multi } from '../../data';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 2 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );


    dataSource: any[] = [];
    multi: any[] = [];
    view: number[] = [700, 300];
  
    // options
    legend: boolean = true;
    showLabels: boolean = true;
    animations: boolean = true;
    xAxis: boolean = true;
    yAxis: boolean = true;
    showYAxisLabel: boolean = true;
    showXAxisLabel: boolean = true;
    xAxisLabel: string = 'Year';
    yAxisLabel: string = 'Normalized Population';
    timeline: boolean = true;
  
    colorScheme:Color = {
      name: 'myScheme',
      selectable: true,
      group: ScaleType.Ordinal,
      domain: ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5']
    };

    constructor(
      private breakpointObserver: BreakpointObserver,
      private chartsService: ChartsService
      ) {
        //Object.assign(this.dataSource);
        Object.assign(this, { multi });
      }
  

    onSelect(event:any) {
      console.log(event);
    }

  private loadAreaGraph() {
    this.chartsService.getColCol().subscribe({
      next: (info) => {
        if ( info.length <= 0) {
          //this.isLoading;
          console.log("Error");
        } else {
          //this.isLoading = false;
          this.dataSource = info;
          console.log(info);
        }
      }
    })
  }

  ngOnInit(): void {
    this.loadAreaGraph();
  }

}
