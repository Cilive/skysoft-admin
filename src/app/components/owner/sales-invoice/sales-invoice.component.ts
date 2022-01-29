import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import { FueldataService } from 'src/app/services/fueldata/fueldata.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Branch } from '../../branch/branch.modal';
import { CustomerProfile } from '../customer-profile/customer-profile.modal';
import { Fuelmaster } from '../vat-fuel-master/vat-fuel-master.model';
import { Invoice } from './invoice.model';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss'],
})
export class SalesInvoiceComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  branch: Branch;
  data: Invoice = {
    customer_name: '',
    type: 2,
    date: null,
    litre: null,
    amount: null,
    vat: null,
    total_amt: null,
    old_balance: null,
    branches: '',
    fuel: null,
    paid_amt: null,
    payment_type: null,
    qty: null,
    contact: null,
    bank_ac_id: null,
    gross_amt: null,
  };
  branchesList: Branch[] = [];
  fuelList: Fuelmaster[] = [];
  customerList: CustomerProfile[] = [];
  Customer: CustomerProfile[] = [];

  constructor(
    private branches: BranchManagerService,
    private fuel: FueldataService,
    private customerService: CustomerProfileService
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
  onEdit(item: Invoice) {
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
      branches: item.branches,
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
    this.customerService
      .get_branchwaisecustomer(this.data.branches)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          console.log(res.data);

          this.customerList = res.data;
        }
      });
  }
}
