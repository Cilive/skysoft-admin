import { Component, OnInit } from '@angular/core';
import { AccountsReportOwner } from './account-ledger.modal';


@Component({
  selector: 'app-account-ledger',
  templateUrl: './account-ledger.component.html',
  styleUrls: ['./account-ledger.component.scss']
})
export class AccountLedgerComponent implements OnInit {
  accoutsladger: AccountsReportOwner[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
