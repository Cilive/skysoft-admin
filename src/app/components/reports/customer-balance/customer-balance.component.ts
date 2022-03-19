import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerbalanceService } from 'src/app/services/customerbalance/customerbalance.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
// import { BranchManagerService } from '../../branch/services/branch-manager/branch-manager.service';
import { Customerbalance } from './customer-balance.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-customer-balance',
  templateUrl: './customer-balance.component.html',
  styleUrls: ['./customer-balance.component.scss'],
})
export class CustomerBalanceComponent implements OnInit {
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
  submitMode: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  data: Customerbalance = {
    invoice_no: 0,
    date: undefined,
    contact: 0,
    total_amt: 0,
    payment_type: '',
    balance_amt: 0,
    type: '',
    recieved: 0,
    company: '',
    fuel: '',
    transaction_type: '',
    customer_name: '',
    customer_ar_name: '',
    phone_no: '',
    UOM: '',
    branches: '',
    amount: 0,
    updated_at: new Date(),
    lan: '',
  };
  branchesList: Branchmanager[] = [];
  customer: Customerbalance[] = [];
  Ar_name;
  amount: Customerbalance[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private customeres: CustomerbalanceService
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

  public onSubmit(): void {
    if (validateForm('Form')) {
      console.log(this.data);
      this.customeres.get_customer_balance(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Customer Balance Added Successfully');
          this.customer = res.data.data;
          console.log(this.data);

          this.amount = res.data.amount.amount;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  public onChange() {}
  onsubmit(data: Customerbalance) {
    this.submitMode = true;

    this.customeres.single_get_customer_balance(data.id).subscribe((res) => {
      this.Ar_name = res.data.customer_ar_name;
      const item = res.data;
    });
  }
}
