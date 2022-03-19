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
import { PurchaseOutReportbranchService } from 'src/app/services/services/purchase-out-report-branch/purchase-out-report=branch.service';
import { CustomerProfile } from '../../branch/components/customer-profile/customer-profile.modal';
import { CustomerProfileService } from '../../branch/services/customer-profile/customer-profile.service';
import { PaymentOutBranch } from './payment-out-report.modal';
import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-payment-out-report-branch',
  templateUrl: './payment-out-report-branch.component.html',
  styleUrls: ['./payment-out-report-branch.component.scss'],
})
export class PaymentOutReportBranchComponent implements OnInit {
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
  data: PaymentOutBranch = {
    invoice_no: undefined,
    date: new Date(),
    qty: 0,
    gross_amt: 0,
    vat_amount: null,
    total_amt: 0,
    vat_percenatge: null,
    payment_type: '',
    username: '',
    description: '',
    price: 0,
    customer: '',
    um: '',
    branch: '',
    net_amount_sum: 0,
    gross_amt_sum: 0,
    net_vat_sum: 0,
    phone_no: null,
    updated_at: new Date(),
  };
  Customer: CustomerProfile[] = [];
  customerList: CustomerProfile[] = [];
  paymentout: PaymentOutBranch[] = [];
  net_amount_sum: PaymentOutBranch[] = [];
  gross_amt_sum: PaymentOutBranch[] = [];
  net_vat_sum: PaymentOutBranch[] = [];
  editMode = false;

  constructor(
    private toast: AlertService,
    private customerService: CustomerProfileService,
    private payment: PurchaseOutReportbranchService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.customerService
      .get_branchwaisecustomer(this.data.branch)
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
      // console.log(this.data);
      this.payment.get_payment_out_report(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('payment out Report Added Successfully');
          this.paymentout = res.data.data;
          console.log(this.data);
          this.net_amount_sum = res.data.total.net_amount_sum;
          this.gross_amt_sum = res.data.total.gross_amt_sum;
          this.net_vat_sum = res.data.total.net_vat_sum;
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
