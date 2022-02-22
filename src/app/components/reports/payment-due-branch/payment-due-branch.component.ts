import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PaymentDueBranchService } from 'src/app/services/services/payment-due-branch/payment-due-branch.service';
import { CustomerProfile } from '../../branch/components/customer-profile/customer-profile.modal';
import { SupplierProfile } from '../../branch/components/supplier-profile/supplier-profile.model';
import { CustomerProfileService } from '../../branch/services/customer-profile/customer-profile.service';
import { SupplierProfileService } from '../../branch/services/supplier-profile/supplier-profile.service';
import { PaymentDueBranch } from './payment-due-branch.modal';

@Component({
  selector: 'app-payment-due-branch',
  templateUrl: './payment-due-branch.component.html',
  styleUrls: ['./payment-due-branch.component.scss'],
})
export class PaymentDueBranchComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  // fuelse: Fuelmaster;
  // invoice_type: invoice;
  // oldbalance: Oldbalance;
  data: PaymentDueBranch = {
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
    // branches: '',
    invoice_type: '',
    contact_en_name: '',
  };
  supplierList: SupplierProfile[] = [];

  // fuelList: Fuelmaster[] = [];
  customerList: CustomerProfile[] = [];
  Customer: CustomerProfile[] = [];
  fuelRate: number;
  old_balance_num: number;
  Paymentdue: PaymentDueBranch[] = [];
  amount: PaymentDueBranch[] = [];
  // bankList: BankAccounts[] = [];
  // salesinvoice: BranchSaleInvoices[] = [];
  modalRef: any;
  modalService: any;
  // salesInvoiceList: BranchSaleInvoices[];
  balance;
  // payableLimit: Invoice[] = [];

  constructor(
    private supplierService: SupplierProfileService,

    // private fuel: FueldataService,
    private customerService: CustomerProfileService,
    private Payment: PaymentDueBranchService,
    private toast: AlertService // private bank: BankAccountMasterService
  ) {}

  ngOnInit(): void {
    this.customerService.get_branchwaisecustomer(this.data).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.customerList = res.data;
      }
    });
    this.supplierService.get_supplier_profile().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);
        this.supplierList = res.data;
      }
    });
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

  custemerlistin(): void {}
  Supplierlisting(): void {}
}
