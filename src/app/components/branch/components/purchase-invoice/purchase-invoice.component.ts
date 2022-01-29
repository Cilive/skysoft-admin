import { Component, OnInit } from '@angular/core';
import { Fuelmaster } from 'src/app/components/owner/vat-fuel-master/vat-fuel-master.model';
import {
  validateForm,
  clearForm,
} from 'src/app/services/general/general.service';
import { CustomerProfileService } from '../../services/customer-profile/customer-profile.service';
import { FueldataService } from '../../services/fueldata/fueldata.service';
import { CustomerProfile } from '../customer-profile/customer-profile.modal';
import { Purchaseinvoice } from './purchase invoice.model';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss'],
})
export class PurchaseInvoiceComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  // branch: Branch;
  data: Purchaseinvoice = {
    customer_name: '',
    type: 2,
    date: null,
    litre: null,
    amount: null,
    vat: null,
    total_amt: null,
    old_balance: null,
    // branches: '',
    fuel: null,
    paid_amt: null,
    payment_type: null,
    qty: null,
    contact: null,
    bank_ac_id: null,
    gross_amt: null,
  };
  // branchesList: Branch[] = [];
  fuelList: Fuelmaster[] = [];
  customerList: CustomerProfile[] = [];

  constructor(
    // private branches: BranchManagerService,
    private fuel: FueldataService,
    private customerService: CustomerProfileService
  ) {}

  ngOnInit(): void {
    // this.branches.get_branches().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);

    //     this.branchesList = res.data;
    //   }
    // });
    this.fuel.get_fuelDetails().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.fuelList = res.data;
      }
    });
  }

  public onSubmit(): void {
    console.log(this.data);
    if (validateForm('form') && this.passError) {
      // this.supplierService.postSupplier(this.supplierForm.value).subscribe(res => {
      //   // this.onReset();
      // });
    }
  }
  onUpdate() {}
  public onReset(): void {
    clearForm('form');
    this.editMode = false;
  }
  onEdit(item: Purchaseinvoice) {
    this.editMode = true;
    this.data = {
      customer_name: item.customer_name,
      type: item.type,
      date: item.date,
      litre: item.litre,
      amount: item.amount,
      vat: item.vat,
      total_amt: item.total_amt,
      old_balance: item.old_balance,
      // branches: item.branches,
      fuel: item.fuel,
      paid_amt: item.paid_amt,
      payment_type: item.payment_type,
      qty: item.qty,
      contact: item.contact,
      bank_ac_id: item.bank_ac_id,
      gross_amt: item.gross_amt,
    };
  }

  custemerlistin(): void {
    this.customerService.get_branchwaisecustomer(this.data).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.customerList = res.data;
      }
    });
  }
}
