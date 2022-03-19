import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SalesdetilesService } from 'src/app/services/salesdetailes/salesdetiles.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
// import { BranchManagerService } from '../../branch/services/branch-manager/branch-manager.service';
import { CustomerProfile } from '../../owner/customer-profile/customer-profile.modal';
import { Salesdetailes } from './sales-setailes.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-sales-details',
  templateUrl: './sales-details.component.html',
  styleUrls: ['./sales-details.component.scss'],
})
export class SalesDetailsComponent implements OnInit {
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
  data: Salesdetailes = {
    invoice_no: undefined,
    date: new Date(),
    // contact: null,
    payment_type: '',
    // balance_amt: null,
    // type: '',
    // recieved: null,
    // company: '',
    // fuel: '',
    // transaction_type: '',
    // customer_name: '',
    // UOM: '',
    // branches: undefined,
    // amount: null,
    updated_at: new Date(),
    id: null,
    qty: 0,
    gross_amt: 0,
    vat_amount: 0,
    total_amt: 0,
    vat_percenatge: 0,
    username: '',
    description: '',
    price: 0,
    customer: '',
    um: '',
    branches: '',
    net_amount_sum: undefined,
    gross_amt_sum: null,
    net_vat_sum: null,
    customer_name: '',
    item: '',
    amount: '',
  };
  branchesList: Branchmanager[] = [];
  // Customer: CustomerProfile[] = [];
  // customerList: CustomerProfile[] = [];
  salesdetailes: Salesdetailes[] = [];
  salese: Salesdetailes[] = [];
  // amount: Debtors[] = [];
  editMode = false;
  customerList: CustomerProfile[] = [];
  net_amount_sum: Salesdetailes[] = [];
  net_vat_sum: Salesdetailes[] = [];
  gross_amt_sum: Salesdetailes[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private customer: CustomerProfileService,
    // private customerService: CustomerProfileService,
    // private payment: PaymentOutService,
    private sales: SalesdetilesService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }
  // payment_in(): void {
  //   this.payment.get_payment_in(this.data.id).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       console.log(res.data);
  //     }
  //   });
  // }
  public onReset(): void {
    clearForm('Form');
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.sales.get_salesdetailes(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('sales-detailes Added Successfully');
          this.salese = res.data.data;
          console.log(this.data);
          this.net_amount_sum = res.data.total.net_amount_sum;
          this.net_vat_sum = res.data.total.net_vat_sum;
          this.gross_amt_sum = res.data.total.gross_amt_sum;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  customerlistin(): void {
    this.customer
      .get_branchwaisecustomer(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);

          this.customerList = res.data;
        }
      });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
