import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { ExpensedetailesService } from 'src/app/services/expensedetailes/expensedetailes.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { Expensedetailes } from './expense-detailes.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-expenses-details',
  templateUrl: './expenses-details.component.html',
  styleUrls: ['./expenses-details.component.scss'],
})
export class ExpensesDetailsComponent implements OnInit {
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

  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: Expensedetailes = {
    date: undefined,
    updated_at: new Date(),

    gross_amt: 0,
    paid_amt: 0,
    total_amt: 0,
    invoice_no: 0,
    exp_type: '',
    ref_no: '',
    payment_type: '',
    username: '',
    customer: '',
    branches: '',
    net_amount_sum: 0,
    gross_amt_sum: 0,
  };
  branchesList: Branchmanager[] = [];
  editMode = false;
  expense: Expensedetailes[] = [];

  net_amount_sum: Expensedetailes[] = [];
  gross_amt_sum: Expensedetailes[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private expenses: ExpensedetailesService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }
  public onReset(): void {
    clearForm('Form');
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.expenses.get_expensedetailes(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('expense-detailes Added Successfully');
          this.expense = res.data.data;
          console.log(this.data);
          this.net_amount_sum = res.data.total.net_amount_sum;
          // this.net_vat_sum = res.data.total.net_vat_sum;
          this.gross_amt_sum = res.data.total.gross_amt_sum;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
}
//  openModal(template: TemplateRef<any>) {
// this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
// }
