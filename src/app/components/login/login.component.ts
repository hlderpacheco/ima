import { Component,ViewEncapsulation,OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ApplicationService } from "../../services/application.service";
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Login } from 'src/app/models/login';


@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  constructor(private fb: FormBuilder, 
    private http:HttpClient, 
    private router:Router, 
    private applicationService:ApplicationService,
    private snackBar: MatSnackBar) {}

  hide = true;
  submitted = false;
  visibility = faEye;
  visibility_off = faEyeSlash;

  loginForm = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    this.logInUser(this.loginForm.controls.email,this.loginForm.controls.password);
  }

   logInUser(email:any,password:any){
    var emailValue = email;
    var passwordValue = password;

    this.applicationService.sendLogInUserData(emailValue,passwordValue)
      .subscribe(
        response => {
          console.log("Response: "+ response);
          this.snackBar.open('Redirecting...', ' ', {
            duration: 5000
          });
          //return this.router.navigate(['/dashboard']);
        },
        err => {
          console.log('Error: ', err );
          return this.snackBar.open('Access Denied', 'OK', {
            duration: 5000
          });
        }
      )
  }

  refreshData(){}

  ngOnInit(): void {
      
  }

}
