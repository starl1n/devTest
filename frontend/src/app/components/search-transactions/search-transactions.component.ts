import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DetailTransactions, Transaction } from 'src/app/interfaces/transaction';
import { TransactionsService } from 'src/app/services/transactions.service';

@Component({
  selector: 'app-search-transactions',
  templateUrl: './search-transactions.component.html',
  styleUrls: ['./search-transactions.component.scss'],
})
export class SearchTransactionsComponent implements OnInit {
  transactions: DetailTransactions[] = [];
  operations: any[] = [];
  page: number = 1;
  pageSize: number = 10;
  searchTerm: string = '';


  constructor(
    private transactionSvc: TransactionsService,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.transactionSvc.getTransactions().subscribe((data: Transaction) => {
      this.transactions = data.transactions;
    });
  }

  openDetails(content: any, operations: any[]) {
    this.operations = operations;
    this.modalService.open(content, { size: 'lg' })
  }
}
