import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SessionReportBranchService } from 'src/app/services/services/session-report-branch/session-report-branch.service';
import { SessionReportBranch } from './session-report-branch.modal';

@Component({
  selector: 'app-session-report-branch',
  templateUrl: './session-report-branch.component.html',
  styleUrls: ['./session-report-branch.component.scss'],
})
export class SessionReportBranchComponent implements OnInit {
  modalRef?: BsModalRef;
  Disabled: false;
  // myFlag = true;
  // owners = [];
  // baranchlist: Branch[] = [];
  // session: Session[] = [];
  data: SessionReportBranch = {
    id: null,
    branch_name: '',
    opening_balance_bank: 0,
    cash_opening_balance: 0,
    closing_balance_bank: null,
    closing_balance_cash: null,
    total_transactions: null,
    to_date: new Date(),
    from_date: new Date(),
    date: '',
  };
  // editMode = false;
  // id: number;
  // Ownerlist: CompanyOwnerComponent[] = [];
  sessionreportBranch: SessionReportBranch[] = [];

  constructor(
    private modalService: BsModalService,
    private sessionReport: SessionReportBranchService,
    private toast: AlertService,
    private route: Router
  ) {
    // console.log(new StoreService().retrieve('id'));
  }

  ngOnInit(): void {
    this.sessionReport.get_session_report(this.data).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('session Added successfully');
        this.sessionreportBranch = res.data.data;
      }
    });

    {
      this.Disabled = false;
      this.data.status = false;
    }
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.sessionReport.get_session_report(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('session Added successfully');
          this.sessionreportBranch = res.data.data;
          // console.log('server response', this.sessionreportBranch);
          clearForm('Form');
        }
      });
    }
  }

  onUpdate() {
    if (validateForm('form')) {
      console.log(this.data);
      let item = this.sessionReport;
      // console.log(item.closing_balance_cash);

      // this.sessions.update_session(this.data, this.data.id).subscribe((res) => {
      //   if (res.msg === 'Success') {
      //     this.toast.success('Session Updated Successfully');
      //     this.ngOnInit();

      //     // this.onReset();
      //   }
      // });
    }
  }
  accountView(id) {
    console.log('Navigation Function Running', id);

    this.route.navigate(['/branch/reports/accountsladgerlisting'], {
      queryParams: {
        id: id,
      },
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
