import { Component, OnInit } from '@angular/core';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { SessionReportsService } from 'src/app/services/session-reports/session-reports.service';
import { Branch } from '../../branch/branch.modal';
import { SessionReportsOwner } from './session.modal';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-session-reports',
  templateUrl: './session-reports.component.html',
  styleUrls: ['./session-reports.component.scss'],
})
export class SessionReportsComponent implements OnInit {
  data: SessionReportsOwner = {
    date: Date(),
    from_date: new Date(),
    to_date: new Date(),
    branch: '',
    id: 0,
    opening_balance_bank: 0,
    cash_opening_balance: 0,
    closing_balance_bank: 0,
    closing_balance_cash: 0,
    total_transactions: null,
    branch_name: '',
  };
  branchesList: Branch[] = [];
  sessionreportsowner: SessionReportsOwner[] = [];

  constructor(
    private branches: BranchManagerService,
    private session_reports: SessionReportsService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);
        // this.branchesList = res.data;
      }
    });
  }

  public onReset(): void {
    clearForm('Form');
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.session_reports.get_session_reports(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Metre Reading Added Successfully');
          this.sessionreportsowner = res.data.data;
          console.log(this.data);
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
}
