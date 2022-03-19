import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentdueService } from 'src/app/services/paymentdue/paymentdue.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
// import { invoice } from '../../branch/components/invoices/invoice.model';
import { CustomerProfile } from '../../owner/customer-profile/customer-profile.modal';
import { SupplierProfile } from '../../owner/supplier-profile/supplier-profile.model';
import { PaymentDue } from './payment-due.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-payment-due',
  templateUrl: './payment-due.component.html',
  styleUrls: ['./payment-due.component.scss'],
})
export class PaymentDueComponent implements OnInit {
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
  logoData: FormData;
  editMode: boolean;

  branch: Branch;
  data: PaymentDue = {
    invoice_no: 0,
    date: undefined,
    updated_at: new Date(),
    total_amt: 0,
    payment_type: '',
    balance_amt: 0,
    type: '',
    recieved: 0,
    company: '',
    fuel: '',
    transaction_type: '',
    customer_ar_name: '',
    phone_no: '',
    UOM: '',
    amount: 0,
    branches: '',
    invoice_type: '',
    contact_en_name: '',
  };
  branchesList: Branchmanager[] = [];
  supplierList: SupplierProfile[] = [];

  customerList: CustomerProfile[] = [];
  Customer: CustomerProfile[] = [];
  fuelRate: number;
  old_balance_num: number;
  Paymentdue: PaymentDue[] = [];
  amount: PaymentDue[] = [];

  modalRef: any;
  modalService: any;
  balance;

  constructor(
    private branches: BranchManagerService,
    private supplierService: SupplierProfileService,

    private customerService: CustomerProfileService,
    private Payment: PaymentdueService,
    private toast: AlertService // private bank: BankAccountMasterService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);
        this.branchesList = res.data;
      }
    });
    // this.fuel.get_fuelDetails().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);

    //     this.fuelList = res.data;
    //   }
    // });
  }
  public onReset(): void {
    clearForm('form');
    this.editMode = false;
  }
  public onSubmit(): void {
    if (validateForm('form')) {
      console.log(this.data);
      this.Payment.get_payment_due(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Payment Due Added Successfully');
          this.Paymentdue = res.data.data;
          console.log(this.data);
          this.amount = res.data.amount.amount;
          this.onReset();
          this.ngOnInit();
        }

        // public onSubmit(): void {
        //   // console.log(this.data);
        //   if (validateForm('form') && this.passError) {
        //     this.salesinvoice.postSupplier(this.supplierForm.value).subscribe(res => {
        // this.onReset();
      });
    }
  }

  custemerlistin(): void {
    this.customerService
      .get_branchwaisecustomer(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);

          this.customerList = res.data;
        }
      });
  }
  Supplierlisting(): void {
    this.supplierService
      .get_branchwais_supplier_profile(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);
          this.supplierList = res.data;
        }
      });
  }
}
