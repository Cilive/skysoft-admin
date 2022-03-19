import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { IncomeExpendtitureService } from 'src/app/services/income-expenditure/income-expendtiture.service';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { Income } from './income-expenditure-report.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-income-and-expenditure-reports',
  templateUrl: './income-and-expenditure-reports.component.html',
  styleUrls: ['./income-and-expenditure-reports.component.scss'],
})
export class IncomeAndExpenditureReportsComponent implements OnInit {
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
  data: Income = {
    total_amt: 0,
    type: '',
    to_date: new Date(),
    from_date: new Date(),
    date: '',
    contact: '',
    um: '',
    total_purchase: 0,
    total_sale: 0,
    balance: 0,
    branches: '',
  };
  income: Income[] = [];
  total_sale: Income[] = [];
  total_purchase: Income[] = [];
  balance: Income[] = [];
  branchesList: Branchmanager[] = [];
  constructor(
    private Income: IncomeExpendtitureService,
    private toast: AlertService,
    private branches: BranchManagerService
  ) {}

  ngOnInit(): void {
    // this.Income.get_income(this.data).subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     this.toast.success('Income Added Successfully');
    //     this.income = res.data.data;
    //   }
    // });
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
      this.Income.get_income(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Icome & Expenditure Added Successfully');
          this.income = res.data.data;
          console.log(this.data);
          this.total_purchase = res.data.total.total_purchase;
          this.total_sale = res.data.total.total_sale;
          this.balance = res.data.balance;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
}
