import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AccountsLadgerBranchService } from 'src/app/services/services/accounts-ladger-branch/accounts-ladger-branch.service';
import { SessionReportBranchService } from 'src/app/services/services/session-report-branch/session-report-branch.service';
import { AccountsReport } from './accounts-ladger-branch.modal';

@Component({
  selector: 'app-accounts-ladger-branch',
  templateUrl: './accounts-ladger-branch.component.html',
  styleUrls: ['./accounts-ladger-branch.component.scss'],
})
export class AccountsLadgerBranchComponent implements OnInit {
  modalRef?: BsModalRef;
  Disabled: false;
  // myFlag = true;
  // owners = [];
  // baranchlist: Branch[] = [];
  // session: Session[] = [];
  data: AccountsReport = {
    id: 0,
    balance: 0,
    debit_balance: 0,
    credit_balance: 0,
    bank: null,
    total_transactions: 0,
    total_sales: 0,
    total_purchase: 0,
    total_expense: 0,
    bank_ac_holder_name: '',
    account_no: '',
    cash_ac_name: '',
    session_id: 0,
  };
  // tableDta : [] = [];
  accoutsladger: AccountsReport[] = [];
  tableData: AccountsReport[] = [];
  constructor(
    // private modalService: BsModalService,
    private acccounts_ladger: SessionReportBranchService,
    // private toast: AlertService,
    private toast: AlertService,
    // private route: Router,
    private active: ActivatedRoute
  ) {
    this.active.queryParams.subscribe((params) => {
      console.log('Params Values In account LEdger', params['id']);

      this.session_id = params['id'];
      // this.session_id = 69;
      console.log('session Id in params', this.session_id);
    });
  }
  session_id;

  ngOnInit(): void {
    this.acccounts_ladger
      .get_acccounts_ladger(this.session_id)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('session Added successfully');

          console.log(res.data);
          this.accoutsladger = res.data;
          console.log(this.data);

          // (this.accoutsladger = res.data), this.data.session_id;
        }
      });

    this.acccounts_ladger;
    // .get_acccounts_ladger(this.data.id)
    // .subscribe((res) => {
    //   this.tableData = res.data;
    // });
  }
}
