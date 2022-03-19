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
import { PaymentinService } from '../../../services/paymentin/paymentin.service';
import { SupplierProfileService } from '../../../services/supplier-profile/supplier-profile.service';
import { SupplierProfile } from '../../supplier-profile/supplier-profile.model';
import { Credit } from './paymentin.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-payments-in',
  templateUrl: './payments-in.component.html',
  styleUrls: ['./payments-in.component.scss'],
})
export class PaymentsInComponent implements OnInit {
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
  data: Credit = {
    invoice_no: null,
    date: undefined,
    // total_amt: 0,
    // company: '',
    // transaction_type: '',
    branches: '',
    // updated_at: undefined,
    // paid: 0,
    Supplier: '',
    amount: null,
    phone_no: '',
    updated_at: new Date(),
    balance_amt: null,
  };
 
  supplierList: SupplierProfile[] = [];
  paymentin: Credit[] = [];
  amount: Credit[] = [];

  constructor(
    // private branches: BranchManagerService,
    private toast: AlertService,
    private supplierService: SupplierProfileService,
    private modalService: BsModalService,
    private paymentservice: PaymentinService
  ) {}

  ngOnInit(): void {
   
    this.supplierService.get_supplier_profile().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.supplierList = res.data;
      }
    });
  }

  public onReset(): void {
    clearForm('Form');
  }

  public onSubmit(): void {
    if (validateForm('Form')) {
      // console.log(this.data);
      this.paymentservice.get_payment_in(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('payment out Added Successfully');
          this.paymentin = res.data.data;
          console.log(this.data);
          this.amount = res.data.amount.amount;
          // this.paymentin = res.data[res.data.length - 1].amount;
          clearForm('Form');

          this.ngOnInit();
        }
      });
    }
  }

  

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
