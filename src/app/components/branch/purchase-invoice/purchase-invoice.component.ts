import { Component, OnInit } from '@angular/core';
import {
  validateForm,
  clearForm,
} from 'src/app/services/general/general.service';

@Component({
  selector: 'app-purchase-invoice',
  templateUrl: './purchase-invoice.component.html',
  styleUrls: ['./purchase-invoice.component.scss'],
})
export class PurchaseInvoiceComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  data = {
    customer_name: '',
    type: '',
    date: '',
    litre: '',
    amount: '',
    vat: '',
    total: '',
    old_balance: '',
  };
  constructor() {}

  ngOnInit(): void {}

  public onSubmit(): void {
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
}
