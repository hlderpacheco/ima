import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpErrorResponse,HttpResponse } from "@angular/common/http";
import { Observable,throwError } from "rxjs";
import {catchError, map, tap} from 'rxjs/operators';

import { User } from "../models/user";
import { Login } from "../models/login";
import { ActiveScenes } from "../models/active-scenes";
import { ScoresScenes } from "../models/scores-scenes";

const httpOptions = {
  headers: new HttpHeaders({
    'content-Type': 'apllication/json',
    'Access-Control-Allow-Origin': '*'
  }),
  //reportProgress: true,
  //responsetype: 'text'
};

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  public baseUrl:String = "http://localhost/dev/Web%20Dev/angular/imx-marksmanship-crm-1.1/api/";

  constructor(private http:HttpClient) { }

  getUsersData():Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"getUserData.php");
  }

  getActiveScenesData():Observable<ActiveScenes[]>{
    return this.http.get<ActiveScenes[]>(this.baseUrl+"getActivescenes.php");
  }

  getScoresScenesData():Observable<ScoresScenes[]>{
    return this.http.get<ScoresScenes[]>(this.baseUrl+"getScores.php");
  }

  sendLogInUserData(email:any,password:any):Observable<Login[]>{
    var body = 
    {
      "email":email.value,
      "password":password.value,
    };
    
    var stringifyBody = JSON.stringify(body);
    var parsedBody = JSON.parse(stringifyBody);
    console.log(stringifyBody);

    return this.http.post<Login[]>(this.baseUrl+"login.php",parsedBody, httpOptions)
    
      .pipe(

        /*
        tap((data) => {
          console.log(data);
          return data;
        }),
        */

        catchError( this.handleError )
        

        /*
        catchError((err) => {
          console.error(err);
          throw err;
        })
        */
        
      );
      
  }

  private handleError(error: HttpErrorResponse) {
    
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    

    /*
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else if(error.status !== 0){
      // The backend returned an successful response code.
      console.info('Successful response code');
    }else{
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(`Backend returned code ${error.status}, body was: `, error.error);
    }
    */

    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }

}
