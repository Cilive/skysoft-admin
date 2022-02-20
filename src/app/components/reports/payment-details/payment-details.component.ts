import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentdetailsService } from 'src/app/services/paymentdetails/paymentdetails.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { PaymentDetails } from './payment-detailes.modal';

@Component({
  selector: 'app-payment-details',
  templateUrl: './payment-details.component.html',
  styleUrls: ['./payment-details.component.scss'],
})
export class PaymentDetailsComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: PaymentDetails = {
    date: new Date(),
    invoice_no: 0,
    qty: 0,
    total_amt: 0,
    vat_percenatge: 0,
    vat_amount: 0,
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
  };
  branchesList: Branchmanager[] = [];
  // Customer: CustomerProfile[] = [];
  // customerList: CustomerProfile[] = [];
  // salesdetailes: Salesdetailes[] = [];
  // salese: Salesdetailes[] = [];
  // amount: Debtors[] = [];
  editMode = false;
  net_amount_sum: PaymentDetails[] = [];
  gross_amt_sum: PaymentDetails[] = [];
  net_vat_sum: PaymentDetails[] = [];
  paymentdetails: PaymentDetails[] = [];
  // customerList: CustomerProfile[] = [];
  // payable_amount_sum: PaymentDetails[] = [];
  // meterreading: PaymentDetails[] = [];
  // dispencerList: Dispense[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    // private dispence: DispensesService,
    // private customer: CustomerProfileService,
    // private customerService: CustomerProfileService,
    // private payment: PaymentOutService,
    // private sales: SalesdetilesService,
    private modalService: BsModalService,
    // private meter: MeterReadigService,
    private paynent: PaymentdetailsService
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
      this.paynent.get_payment_detailes(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Payment Detailes Added Successfully');
          this.paymentdetails = res.data.data;
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
  // dispencerlistin(): void {
  //   this.dispence.get_brnch_dispence().subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       console.log(res.data);

  //       this.dispencerList = res.data;
  //     }
  //   });
  // }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
