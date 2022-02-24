import { Component, OnInit, TemplateRef } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { BankAccountMasterService } from '../../../services/bank-account-master/bank-account-master.service';
import { ExpenseService } from '../../../services/expense/expense.service';
import { BankAccounts } from '../../bank-account-master/bank-account-master.model';
import { FuelData } from '../../vat-fuel-master/vat-fuel-master.model';
import { BranchExpense } from './expenses.modal';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  fuelse: FuelData;

  // branch: Branch;
  // oldbalance: Oldbalance;
  data: BranchExpense = {
    payment_type: 0,
    qty: 0,

    type: 3,
    exp_type: '',
    ref_no: '',
    paid_amt: 0,
    gross_amt: 0,
    total_amt: 0,
    date: new Date(),
    bank_ac_id: 0,
    amount: '',
  };
  // branchesList: Branch[] = [];
  fuelList: FuelData[] = [];
  // customerList: CustomerProfile[] = [];
  // Customer: CustomerProfile[] = [];
  fuelRate: number;
  old_balance_num: number;
  bankList: BankAccounts[] = [];
  // salesinvoice: BranchSaleInvoices[] = [];
  modalRef: any;
  modalService: any;
  // salesInvoiceList: BranchSaleInvoices[];
  balance;
  payableLimit: BranchExpense[] = [];
  expense: BranchExpense[] = [];

  constructor(
    // private branches: BranchManagerService,
    // private fuel: FueldataService,
    // private customerService: CustomerProfileService,
    private Expense: ExpenseService,
    private toast: AlertService,
    private bank: BankAccountMasterService
  ) {}

  ngOnInit(): void {
    this.Expense.get_expense().subscribe((res) => {
      this.expense = res.data.map((t) => {
        t.date = new Date(t.date);
        return t;
      });
    });
    // this.branches.get_branches().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);
    //     this.branchesList = res.data;
    //   }
    // });
    // this.fuel.get_fuelDetails().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);
    //     this.fuelList = res.data;
    //   }
    // });
    this.Expense.get_bank(this.data).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.bankList = res.data;
      }
    });
  }
  public onSubmit(): void {
    if (validateForm('form')) {
      // console.log(this.data);
      this.Expense.post_expense(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('invoice Added Successfully');
          // this.expense = res.data.data;
          clearForm('form');

          // this.onReset();
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

  public onUpdate() {
    if (validateForm('form')) {
      // console.log(this.data);
      this.Expense.update_expense(this.data, this.data.id).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('sales invoices Updated Successful');
          this.ngOnInit();
          this.onReset();
        }
      });
    }
  }

  public onReset(): void {
    clearForm('form');
    this.editMode = false;
  }
  // public onChangePayable() {}
  // onEdit(data: BranchSaleInvoices) {
  //   this.editMode = true;

  public onEdit(item: BranchExpense): void {
    this.editMode = true;
    this.data = {
      payment_type: item.payment_type,
      qty: item.qty,
      type: item.type,
      // branches: item.branches,
      exp_type: item.exp_type,
      ref_no: item.ref_no,
      paid_amt: item.paid_amt,
      bank_ac_id: item.bank_ac_id,
      gross_amt: item.gross_amt,
      total_amt: item.total_amt,
      id: item.id,
      date: item.date,
      // exp_type: item.exp_type,
      amount: item.amount,
      invoice_no: item.invoice_no,
      // customer_name: item.customer_name,
      // payable_amt: item.payable_amt,
      // contact: item.contact,
    };

    // is_default: item.is_default,
  }
  //     this.fuel
  //       .get_single_fuel(item.fuel)
  //       .subscribe((res) => (this.fuelse = res.data));
  //   });
  // }

  custemerlistin(): void {
    // this.customerService;
    // .get_branchwaisecustomer(this.data.branches)
    // .subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);

    //     this.customerList = res.data;
    //   }
    // });

    // this.Expense.get_branch_expense(this.data.branches).subscribe(
    //   (res) => {
    //     if (res.msg === 'Success')
    {
      // this.salesInvoiceList = res.data;
    }
  }

  public onDelete(id) {
    this.Expense.delete_expense(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef.hide();
        this.toast.success('Selected Customer Deleted');
        this.ngOnInit();
      }
    });
  }
  public onSuspend(id) {
    this.Expense.suspend_expense(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Customer Added to Suspend List');
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
