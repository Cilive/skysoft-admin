import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { CustomerbalanceService } from '../../branch/services/customerbalance/customerbalance.service';
import { Customerbalance } from '../customer-balance/customer-balance.modal';
import { CustomerbalanceBranch } from './CustomerBalanceBranch.modal';

@Component({
  selector: 'app-customer-balance-branch',
  templateUrl: './customer-balance-branch.component.html',
  styleUrls: ['./customer-balance-branch.component.scss'],
})
export class CustomerBalanceBranchComponent implements OnInit {
  passError: boolean;
  submitMode: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: CustomerbalanceBranch = {
    invoice_no: 0,
    date: undefined,
    contact: 0,
    total_amt: 0,
    payment_type: '',
    balance_amt: 0,
    type: '',
    recieved: 0,
    company: '',
    fuel: '',
    transaction_type: '',
    customer_name: '',
    customer_ar_name: '',
    phone_no: '',
    UOM: '',
    // branches: '',
    amount: 0,
    updated_at: new Date(),
    lan: '',
  };

  // editMode = false;
  customer: Customerbalance[] = [];
  Ar_name;
  amount: Customerbalance[] = [];
  // gross_amt_sum: Expensedetailes[] = [];

  constructor(
    private toast: AlertService,
    private customeres: CustomerbalanceService
  ) {}

  ngOnInit(): void {}
  public onReset(): void {
    clearForm('Form');
  }

  public onSubmit(): void {
    console.log(this.data);

    if (validateForm('Form')) {
      console.log(this.data);
      this.customeres.get_customer_balance(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Customer Balance Added Successfully');
          this.customer = res.data.data;
          console.log(this.data);
          // this.amount = res.data.amount.net_amount_sum;
          // this.net_vat_sum = res.data.total.net_vat_sum;
          this.amount = res.data.amount.amount;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  public onChange() {}
  onsubmit(data: Customerbalance) {
    this.submitMode = true;

    this.customeres.single_get_customer_balance(data.id).subscribe((res) => {
      this.Ar_name = res.data.customer_ar_name;
      const item = res.data;
    });
  }
}

//  openModal(template: TemplateRef<any>) {
// this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
// }
