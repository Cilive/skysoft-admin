import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/components/branch/branch.modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentInService } from 'src/app/services/payment-in/payment-in.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { CustomerProfile } from '../../customer-profile/customer-profile.modal';
import { SupplierProfile } from '../../supplier-profile/supplier-profile.model';
import { Credit } from './payment-in.modal';

@Component({
  selector: 'app-payments-in',
  templateUrl: './payments-in.component.html',
  styleUrls: ['./payments-in.component.scss'],
})
export class PaymentsInComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  branch: Branch;
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
  branchesList: Branch[] = [];
  // Customer: CustomerProfile[] = [];
  supplierList: SupplierProfile[] = [];
  paymentin: Credit[] = [];
  amount: Credit[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private supplierService: SupplierProfileService,
    private modalService: BsModalService,
    private paymentservice: PaymentInService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
    // this.paymentservice.get_payment_in().subscribe((res) => {
    //   this.payment = res.data;
    // });
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

  // Supplierlistin(): void {
  //   this.supplierService.get_supplier_profile().subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       console.log(res.data);
  //       this.supplierList = res.data;
  //     }
  //   });
  // }

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

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
