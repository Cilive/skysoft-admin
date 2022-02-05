import { Component, OnInit, TemplateRef } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from 'src/app/services/bank-account-master/bank-account-master.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import { FueldataService } from 'src/app/services/fueldata/fueldata.service';
import {
  validateForm,
  clearForm,
} from 'src/app/services/general/general.service';
import { PurchaseinvoiceService } from 'src/app/services/purchaseinvoice/purchaseinvoice.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { Branch } from '../../branch/branch.modal';
import { BranchManagerService } from '../../branch/services/branch-manager/branch-manager.service';
import { BankAccounts } from '../bank-account-master/bank-account-master.model';
import { CustomerProfile } from '../customer-profile/customer-profile.modal';
import { BranchSaleInvoices } from '../sales-invoice/invoice.model';
import { SupplierProfile } from '../supplier-profile/supplier-profile.model';
import { Fuelmaster } from '../vat-fuel-master/vat-fuel-master.model';
import { Oldbalance, purchaseInvoice } from './purchase-invoice.model';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss'],
})
export class PurchaseInvoiceComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  fuelse: Fuelmaster;

  branch: Branch;
  oldbalance: Oldbalance;
  data: purchaseInvoice = {
    type: 1,
    date: null,
    fuelvat_percentage: null,
    total_amt: null,
    // old_balance: null,
    branches: null,
    fuel: null,
    paid_amt: null,
    payment_type: 1,
    qty: null,
    contact: null,
    bank_ac_id: null,
    gross_amt: null,
    vat_amount: null,
    // invoice_no: null,
    // customer_name: '',
    // balance_amt: null,
    // is_default: false,
  };
  branchesList: Branch[] = [];
  fuelList: Fuelmaster[] = [];
  supplierList: SupplierProfile[] = [];
  Customer: CustomerProfile[] = [];
  fuelRate: number;
  old_balance_num: number;
  bankList: BankAccounts[] = [];
  salesinvoice: purchaseInvoice[] = [];
  modalRef: any;
  modalService: any;
  purchaseInvoiceList: purchaseInvoice[];
  balance;
  payableLimit: purchaseInvoice[] = [];

  constructor(
    private branches: BranchManagerService,
    private fuel: FueldataService,
    private customerService: CustomerProfileService,
    private invoice: PurchaseinvoiceService,
    private toast: AlertService,
    private bank: BankAccountMasterService,
    private supplierService: SupplierProfileService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
    this.fuel.get_fuelDetails().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.fuelList = res.data;
      }
    });
  }
  public onSubmit(): void {
    if (validateForm('form')) {
      console.log(this.data);
      this.invoice.post_purchase_invoice(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('invoice Added Successfully');
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

  public onUpdate() {
    if (validateForm('form')) {
      console.log(this.data);
      this.invoice
        .update_purchase_invoice(this.data, this.data.id)
        .subscribe((res) => {
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
  public onChangePayable() {}
  onEdit(data: purchaseInvoice) {
    this.editMode = true;

    this.invoice.single_get_purchase_invoice(data.id).subscribe((res) => {
      this.balance = res.data.balance_amt;
      const item = res.data;

      this.data = {
        type: item.type,
        date: item.date,
        fuelvat_percentage: item.fuelvat_percentage,
        total_amt: item.total_amt,
        // old_balance: item.old_balance,
        branches: item.branches,
        fuel: item.fuel,
        paid_amt: item.paid_amt,
        payment_type: item.payment_type,
        qty: item.qty,
        contact: item.contact,
        bank_ac_id: item.bank_ac_id,
        gross_amt: item.gross_amt,
        vat_amount: item.vat_amount,
        // invoice_no: item.invoice_no,
        balance_amt: item.balance_amt,
        id: item.id,
        // is_default: item.is_default,
      };
      this.fuel
        .get_single_fuel(item.fuel)
        .subscribe((res) => (this.fuelse = res.data));
    });
  }

  supplierlistin(): void {
    this.supplierService.get_supplier_profile().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.supplierList = res.data;
      }
    });
    this.invoice.get_bank(this.data.branches).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.bankList = res.data;
      }
    });
    this.invoice
      .get_branch_purchase_invoices(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          this.purchaseInvoiceList = res.data;
        }
      });
  }
  old_balance(): void {
    this.invoice.get_old_balance(this.data.contact).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.old_balance_num = res.data.balance_amt_sum;
      }
    });
  }

  fuels(): void {
    this.data.fuelvat_percentage = this.fuelse.fuel_vat;
    this.fuelRate = this.fuelse.rate;
    this.data.fuel = this.fuelse.id;
  }
  onChangeLitre() {
    this.data.gross_amt = this.data.qty * this.fuelRate;
    this.data.vat_amount =
      (this.data.gross_amt * this.data.fuelvat_percentage) / 100;
    this.data.total_amt = this.data.gross_amt + this.data.vat_amount;
  }

  public onDelete(id) {
    this.invoice.delete_purchase_invoice(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef.hide();
        this.toast.success('Selected Customer Deleted');
        this.ngOnInit();
      }
    });
  }
  public onSuspend(id) {
    this.invoice.suspend_purchase_invoice(id).subscribe((res) => {
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
  compareSelected(a, b) {
    console.log(a, b);

    return a && b && a.id == b.id;
  }
}

//   branchesList: Branch[] = [];
//   fuelList: Fuelmaster[] = [];
//   customerList: CustomerProfile[] = [];
//   Customer: CustomerProfile[] = [];
//   fuelRate: number;
//   old_balance_num: number;
//   bankList: BankAccounts[] = [];

//   constructor(
//     private branches: BranchManagerService,
//     private fuel: FueldataService,
//     private customerService: CustomerProfileService,
//     private invoice: PurchaseinvoiceService,
//     private toast: AlertService,
//     private bank: BankAccountMasterService
//   ) {}

//   ngOnInit(): void {
//     this.branches.get_branches().subscribe((res) => {
//       if (res.msg === 'Success') {
//         console.log(res.data);

//         this.branchesList = res.data;
//       }
//     });
//     this.fuel.get_fuelDetails().subscribe((res) => {
//       if (res.msg === 'Success') {
//         console.log(res.data);

//         this.fuelList = res.data;
//       }
//     });
//   }
//   public onSubmit(): void {
//     if (validateForm('form')) {
//       // console.log(this.data);
//       this.invoice.post_sales_invoice(this.data).subscribe((res) => {
//         if (res.msg === 'Success') {
//           this.toast.success('invoice Added Successfully');
//           this.onReset();
//           this.ngOnInit();
//         }

//   onUpdate() {}
//   public onReset(): void {
//     clearForm('form');
//     this.editMode = false;
//   }
//   onEdit(item: purchaseInvoice) {
//     this.editMode = true;
//     this.data = {
//       type: item.type,
//       date: item.date,
//       fuelvat_percentage: item.fuelvat_percentage,
//       total_amt: item.total_amt,
//       old_balance: item.old_balance,
//       branches: item.branches,
//       fuel: item.fuel,
//       paid_amt: item.paid_amt,
//       payment_type: item.payment_type,
//       qty: item.qty,
//       contact: item.contact,
//       bank_ac_id: item.bank_ac_id,
//       gross_amt: item.gross_amt,
//       vat_amount: item.vat_amount,
//     };
//   }

//   custemerlistin(): void {
//     this.customerService
//       .get_branchwaisecustomer(this.data.branches)
//       .subscribe((res) => {
//         if (res.msg === 'Success') {
//           console.log(res.data);

//           this.customerList = res.data;
//         }
//       });
//     this.invoice.get_bank(this.data.branches).subscribe((res) => {
//       if (res.msg === 'Success') {
//         console.log(res.data);

//         this.bankList = res.data;
//       }
//     });
//   }
//   old_balance(): void {
//     this.invoice.get_old_balance(this.data.contact).subscribe((res) => {
//       if (res.msg === 'Success') {
//         console.log(res.data);

//         this.old_balance_num = res.data.balance_amt_sum;
//       }
//     });
//   }

//   fuels(): void {
//     this.data.fuelvat_percentage = this.fuelse.fuel_vat;
//     this.fuelRate = this.fuelse.rate;
//     this.data.fuel = this.fuelse.id;
//   }
//   onChangeLitre() {
//     this.data.gross_amt = this.data.qty * this.fuelRate;
//     this.data.vat_amount =
//       (this.data.gross_amt * this.data.fuelvat_percentage) / 100;
//     this.data.total_amt = this.data.gross_amt + this.data.vat_amount;
//   }
// }
