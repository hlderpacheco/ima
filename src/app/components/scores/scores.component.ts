import { Component,OnDestroy,OnInit,ViewChild,AfterViewInit} from '@angular/core';
import { Observable } from "rxjs";
import { ApplicationService } from "../../services/application.service";
import { ScoresScenes } from "../../models/scores-scenes";
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

export interface ScoresScenesDataInterface {
  name:string,
  exercise:string,
  tableName:string,
  weapon:string;
  score:string,
  comment:string,
  instructor:string,
  time:string,
  date:string,
  targetResult:string
}

@Component({
  selector: 'app-scores',
  templateUrl: './scores.component.html',
  styleUrls: [
    './scores.component.scss',
    '../../stylesheet/disPlyTable.scss'
  ]
})
export class ScoresComponent implements OnDestroy,OnInit,AfterViewInit {

  isLoading = true;
  showFiller = false;
  obs!:Observable<any>;
  dataSource: MatTableDataSource<ScoresScenes> = new MatTableDataSource<ScoresScenes>([]);
  displayedColumns: string[] = [
    'name',
    'exercise',
    'tableName',
    'weapon',
    'score',
    'comment',
    'instructor',
    'time',
    'date',
    'targetResult'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private applicationService:ApplicationService ) { }

  private loadActiveScenesInfo() {
    this.applicationService.getScoresScenesData().subscribe({
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
