import { Component,ChangeDetectorRef,OnDestroy,OnInit,ViewChild,Inject,AfterViewInit} from '@angular/core';
import { Observable } from "rxjs";
import { ApplicationService } from "../../services/application.service";
import { User } from "../../models/user";
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from "@angular/common/http";
import { MatDialog,MAT_DIALOG_DATA,MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

export interface UserDataInterface {
  name:string;
  title:string;
  phoneNumber:string;
  status:string;
  role:string;
  deleteButton:string;
  editButton:string;
}
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: [
    './users.component.scss',
    '../../stylesheet/disPlyTable.scss'
  ]
})
export class UsersComponent implements OnInit,OnDestroy,AfterViewInit {
  isLoading = true;
  showFiller = false;
  obs!:Observable<any>;
  dataSource: MatTableDataSource<User> = new MatTableDataSource<User>([]);
  displayedColumns: string[] = ['name','title','phoneNumber','role','status','deleteButton','editButton'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private applicationService:ApplicationService,
    public dialog: MatDialog,
  ) { }
  
  private loadUserInfo() {
    this.applicationService.getUsersData().subscribe({
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

  onDelete(email:any){
    var myFormData = new FormData();
    myFormData.append('email', email);
    let dialogRef = this.dialog.open(UserDialogComponent, {
      autoFocus: false,
      data: { email: email },
    });
  }

  onEdit(email:any){
    
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  ngOnInit(): void{
    this.loadUserInfo();
    this.obs = this.dataSource.connect();
  }

  ngOnDestroy(): void {
    if (this.dataSource) {
        this.dataSource.disconnect();
    }
  }
}

@Component({
  selector: 'users-dialog',
  templateUrl: 'users-dialog.component.html',
  styleUrls: ['../../stylesheet/dialog.scss']
})
export class UserDialogComponent {
  alertMsg!:string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {email: string},
    public dialogRef: MatDialogRef<UserDialogComponent>,
    private http:HttpClient
  ) { }

  onCancel(): void {
    this.dialogRef.close();
  }

  onComfirmation(email:any){
    var myFormData = new FormData();
    myFormData.append('email', email);
    return this.http.post("http://localhost/dev/Web%20Dev/angular/imx-marksmanship-crm-1.1/api/deleteUserData.php",myFormData).subscribe(
      (res) => {
        alert("User has been deleted successfully.");
      }
    );
  }

  ngOnInit(): void{
    this.alertMsg = "Are you sure you want to remove " +this.data.email+ " from your system?";
    this.onComfirmation(this.data.email);
    console.log(this.data);
  }

}

