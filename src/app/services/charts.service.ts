import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { NumOfRoundsUsed } from "../models/chart-models/num-of-rounds-used";

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  public baseUrl:String = "http://localhost/dev/Web%20Dev/angular/imx-marksmanship-crm-1.1/api/charts/";

  constructor(private http:HttpClient) { }

  getColCol():Observable<NumOfRoundsUsed[]>{
    return this.http.get<NumOfRoundsUsed[]>(this.baseUrl+"numberOfRoundsUsed.php");
  }
}
