import { Component,OnDestroy,OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { Observable } from "rxjs";
import { ApplicationService } from "../../services/application.service";
import { ActiveScenes } from "../../models/active-scenes";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ActiveScenesDataInterface {
  traineeName:string;
  exerciseName:string;
  instructor:string;
  date:string;
  numberOfCiviliansHit:number;
  numberOfEnemyHit:number;
  precisionPercentage:number;
  numberOfRoundsUsed:number;
}

@Component({
  selector: 'app-active-scenes',
  templateUrl: './active-scenes.component.html',
  styleUrls: [
    './active-scenes.component.scss',
    '../../stylesheet/disPlyTable.scss'
  ]
})
export class ActiveScenesComponent implements OnDestroy,OnInit,AfterViewInit {

  isLoading = true;
  showFiller = false;
  obs!:Observable<any>;
  dataSource: MatTableDataSource<ActiveScenes> = new MatTableDataSource<ActiveScenes>([]);
  displayedColumns: string[] = [
    'traineeName',
    'exerciseName',
    'instructor',
    'date',
    'numberOfCiviliansHit',
    'numberOfEnemyHit',
    'precisionPercentage',
    'numberOfRoundsUsed'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private applicationService:ApplicationService ) { }

  private loadActiveScenesInfo() {
    this.applicationService.getActiveScenesData().subscribe({
      next: (info) => {
        if ( info.length <= 0) {
          this.isLoading;
        } else {
          this.isLoading = false;
          this.dataSource.data = info;
          console.log(info);
        }
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void{
    this.loadActiveScenesInfo();
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
        this.dataSource.disconnect();
    }
  }

}
