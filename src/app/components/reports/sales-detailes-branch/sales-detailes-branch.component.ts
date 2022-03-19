import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SalesDetailesBranchService } from 'src/app/services/services/sales-detailes-branch/sales-detailes-branch.service';
import { CustomerProfile } from '../../branch/components/customer-profile/customer-profile.modal';
import { CustomerProfileService } from '../../branch/services/customer-profile/customer-profile.service';
import { SalesdetailesBranch } from './sales-detales-branch.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-sales-detailes-branch',
  templateUrl: './sales-detailes-branch.component.html',
  styleUrls: ['./sales-detailes-branch.component.scss'],
})
export class SalesDetailesBranchComponent implements OnInit {
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
  data: SalesdetailesBranch = {
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
  // Customer: CustomerProfile[] = [];
  // customerList: CustomerProfile[] = [];
  salesdetailes: SalesdetailesBranch[] = [];
  salese: SalesdetailesBranch[] = [];
  // amount: Debtors[] = [];
  editMode = false;
  customerList: CustomerProfile[] = [];
  net_amount_sum: SalesdetailesBranch[] = [];
  net_vat_sum: SalesdetailesBranch[] = [];
  gross_amt_sum: SalesdetailesBranch[] = [];

  constructor(
    private toast: AlertService,
    private customer: CustomerProfileService,
    // private customerService: CustomerProfileService,
    // private payment: PaymentOutService,
    private sales: SalesDetailesBranchService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.customer
      .get_branchwaisecustomer(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);

          this.customerList = res.data;
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
  customerlistin(): void {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
