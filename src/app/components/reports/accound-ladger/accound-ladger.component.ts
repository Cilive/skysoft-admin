import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AccountLadgerOtpService } from 'src/app/services/account-ladger/account-ladger-otp.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { SessionReportsService } from 'src/app/services/session-reports/session-reports.service';
import { AccountsReports } from './account-ladger.modal';

@Component({
  selector: 'app-accound-ladger',
  templateUrl: './accound-ladger.component.html',
  styleUrls: ['./accound-ladger.component.scss'],
})
export class AccoundLadgerComponent implements OnInit {
  modalRef?: BsModalRef;
  Disabled: false;
  // myFlag = true;
  // owners = [];
  // baranchlist: Branch[] = [];
  // session: Session[] = [];
  data: AccountsReports = {
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
  accoutsladger: AccountsReports[] = [];
  tableData: AccountsReports[] = [];
  constructor(
    private acccounts_ladger: AccountLadgerOtpService,

    private toast: AlertService,
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
          this.accoutsladger = res.data['data'];
          console.log(this.data);
          // (this.accoutsladger = res.data), this.data.session_id;
        }
      });
    this.acccounts_ladger;
  }
}
