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
import { PurchaseInReportBranchService } from 'src/app/services/services/purchase-in-report-branch/purchase-in-report-branch.service';
import { SupplierProfile } from '../../branch/components/supplier-profile/supplier-profile.model';
import { SupplierProfileService } from '../../branch/services/supplier-profile/supplier-profile.service';
import { PaymentInBranch } from './payment-in-report.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-payment-in-report-branch',
  templateUrl: './payment-in-report-branch.component.html',
  styleUrls: ['./payment-in-report-branch.component.scss'],
})
export class PaymentInReportBranchComponent implements OnInit {
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

  data: PaymentInBranch = {
    date: new Date(),

    updated_at: new Date(),
    invoice_no: '',
    qty: 0,
    total_amt: 0,
    vat_percenatge: null,
    vat_amount: null,
    gross_amt: 0,
    invoice_type: '',
    company: '',
    Description: '',
    supplier_name: '',
    price: 0,
    branch_name: '',
    Unit: '',
    net_amount_sum: 0,
    gross_amt_sum: 0,
    net_vat_sum: 0,
    phone_no: null,
  };

  supplierList: SupplierProfile[] = [];
  paymentout: PaymentInBranch[] = [];
  net_amount_sum: PaymentInBranch[] = [];
  gross_amt_sum: PaymentInBranch[] = [];
  net_vat_sum: PaymentInBranch[] = [];
  editMode = false;

  constructor(
    private toast: AlertService,
    private payment: PurchaseInReportBranchService,
    private supplierService: SupplierProfileService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.supplierService.get_supplier_profile().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);
        this.supplierList = res.data;
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
      this.payment.get_payment_in_report(this.data).subscribe((res) => {
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
  Supplierlisting(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
