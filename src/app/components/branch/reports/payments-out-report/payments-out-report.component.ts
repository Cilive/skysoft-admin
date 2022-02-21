import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentoutreportService } from 'src/app/services/paymentoutreport/paymentoutreport.service';
import { CustomerProfile } from '../../components/customer-profile/customer-profile.modal';
import { PaymentOut } from './payment-out-report.modal';

@Component({
  selector: 'app-payments-out-report',
  templateUrl: './payments-out-report.component.html',
  styleUrls: ['./payments-out-report.component.scss'],
})
export class PaymentsOutReportComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branchmanager;
  data: PaymentOut = {
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
  // branchesList: Branchmanager[] = [];
  Customer: CustomerProfile[] = [];
  customerList: CustomerProfile[] = [];
  paymentout: PaymentOut[] = [];
  net_amount_sum: PaymentOut[] = [];
  gross_amt_sum: PaymentOut[] = [];
  net_vat_sum: PaymentOut[] = [];
  editMode = false;

  constructor(
    // private branches: BranchManagerService,
    private toast: AlertService,
    private customerService: CustomerProfileService,
    private payment: PaymentoutreportService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    // this.branches.get_branches().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);
    //     this.branchesList = res.data;
    //   }
    // });
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
  customerlistin(): void {
    this.customerService
      .get_branchwaisecustomer(this.data.branch)
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
