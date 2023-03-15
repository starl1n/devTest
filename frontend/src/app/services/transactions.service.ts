import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { api } from '../enums/api.enum';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  constructor(private http: HttpClient) {}

  getTransactions(): Observable<Transaction> {
    return this.http.get<Transaction>(`${environment.server}${api.transaction}`);
  }
}
