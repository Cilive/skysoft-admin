import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentinreportService } from 'src/app/services/paymentinreport/paymentinreport.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { SupplierProfile } from '../../owner/supplier-profile/supplier-profile.model';
import { PaymentIn } from './payment-in-report.modal';

@Component({
  selector: 'app-payments-in-report',
  templateUrl: './payments-in-report.component.html',
  styleUrls: ['./payments-in-report.component.scss'],
})
export class PaymentsInReportComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  branch: Branch;
  data: PaymentIn = {
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
  branchesList: Branchmanager[] = [];
  supplierList: SupplierProfile[] = [];
  paymentout: PaymentIn[] = [];
  net_amount_sum: PaymentIn[] = [];
  gross_amt_sum: PaymentIn[] = [];
  net_vat_sum: PaymentIn[] = [];
  editMode = false;

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private payment: PaymentinreportService,
    private supplierService: SupplierProfileService,
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
  Supplierlisting(): void {
    this.supplierService
      .get_branchwais_supplier_profile(this.data.branch_name)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);
          this.supplierList = res.data;
        }
      });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
