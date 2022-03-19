import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SessionReportBranchService } from 'src/app/services/services/session-report-branch/session-report-branch.service';
import { SessionReportBranch } from './session-report-branch.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-session-report-branch',
  templateUrl: './session-report-branch.component.html',
  styleUrls: ['./session-report-branch.component.scss'],
})
export class SessionReportBranchComponent implements OnInit {
  //pdf  generating function

  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open();
  }

  modalRef?: BsModalRef;
  Disabled: false;

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

  sessionreportBranch: SessionReportBranch[] = [];

  constructor(
    private modalService: BsModalService,
    private sessionReport: SessionReportBranchService,
    private toast: AlertService,
    private route: Router
  ) {}

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
          clearForm('Form');
        }
      });
    }
  }

  onUpdate() {
    if (validateForm('form')) {
      console.log(this.data);
      let item = this.sessionReport;
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
