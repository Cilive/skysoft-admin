import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/components/branch/branch.modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentOutService } from 'src/app/services/payment-out/payment-out.service';
import { Branchmanager } from '../../branch-manager/branch-manager.model';
import { CustomerProfile } from '../../customer-profile/customer-profile.modal';
import { Debtors } from './payment-out.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-payments-out',
  templateUrl: './payments-out.component.html',
  styleUrls: ['./payments-out.component.scss'],
})
export class PaymentsOutComponent implements OnInit {
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
  branch: Branch;
  data: Debtors = {
    invoice_no: undefined,
    date: new Date(),
    contact: null,
    payment_type: '',
    balance_amt: null,
    type: '',
    recieved: null,
    company: '',
    fuel: '',
    transaction_type: '',
    customer_name: '',
    UOM: '',
    branches: undefined,
    amount: null,
    updated_at: new Date(),
    id: null,
    phone_no: null,
  };
  branchesList: Branchmanager[] = [];
  Customer: CustomerProfile[] = [];
  customerList: CustomerProfile[] = [];
  paymentout: Debtors[] = [];
  amount: Debtors[] = [];
  editMode = false;

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private customerService: CustomerProfileService,
    private payment: PaymentOutService,
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
      // console.log(this.data);
      this.payment.get_payment_out(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('payment out Added Successfully');
          this.paymentout = res.data.data;
          console.log(this.data);
          this.amount = res.data.amount.amount;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  customerlistin(): void {
    this.customerService
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

  // suspend(id): void {
  //   this.payment.suspend_payment_out(id).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       this.toast.success(' payment in Added To Suspended List');
  //       this.ngOnInit();
  //     }
  //   });
  // }
}
