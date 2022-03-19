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
import { PurchaseDetailesBranchService } from 'src/app/services/services/purchase-detailes-branch/purchase-detailes-branch.service';
import { SupplierProfile } from '../../branch/components/supplier-profile/supplier-profile.model';
import { SupplierProfileService } from '../../branch/services/supplier-profile/supplier-profile.service';
import { PurchasedetilesBranch } from './purchase-detailes-branch.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-parchase-detailes-branch',
  templateUrl: './parchase-detailes-branch.component.html',
  styleUrls: ['./parchase-detailes-branch.component.scss'],
})
export class ParchaseDetailesBranchComponent implements OnInit {
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
  data: PurchasedetilesBranch = {
    invoice_no: null,
    date: undefined,

    qty: 0,
    total_amt: 0,
    vat_percenatge: 0,
    vat_amount: 0,
    gross_amt: 0,
    invoice_type: '',
    company: '',
    Description: '',
    suppier_name: '',
    price: 0,
    Unit: '',
    net_amount_sum: 0,
    gross_amt_sum: 0,
    net_vat_sum: 0,
    updated_at: new Date(),
  };
  supplierList: SupplierProfile[] = [];
  purchase: PurchasedetilesBranch[] = [];
  net_amount_sum: PurchasedetilesBranch[] = [];
  net_vat_sum: PurchasedetilesBranch[] = [];
  gross_amt_sum: PurchasedetilesBranch[] = [];

  constructor(
    private toast: AlertService,
    private supplierService: SupplierProfileService,
    private modalService: BsModalService,
    private purchases: PurchaseDetailesBranchService // private paymentservice: PaymentInService
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

  onSubmit(): void {
    if (validateForm('Form')) {
      // console.log(this.data);
      this.purchases.get_purchase_detailes(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('purchase-detailes Added Successfully');
          this.purchase = res.data.data;
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

  Supplierlistin(): void {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
