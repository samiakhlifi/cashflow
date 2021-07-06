import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Cashflow } from './cashflow';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CashflowServiceService {
  private baseURL = "http://localhost:8080/cashflow";

  constructor(private httpClient: HttpClient) {

   }
   createcashflow(cashflow: Cashflow): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/create`, cashflow);
  }

}
