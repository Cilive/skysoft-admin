import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { clearForm, validateForm } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-sales-invoice',
  templateUrl: './sales-invoice.component.html',
  styleUrls: ['./sales-invoice.component.scss']
})
export class SalesInvoiceComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  editMode: boolean;
  salesinvoiceForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  public onSubmit(): void {
    if (validateForm('form') && this.passError) {
      // this.supplierService.postSupplier(this.supplierForm.value).subscribe(res => {
      //   // this.onReset();
      // });
    }
  }

  public onReset(): void {
    this.salesinvoiceForm.reset();
    clearForm('form');
    this.editMode = false;
  }

  private prepareForm() {
    this.salesinvoiceForm = new FormGroup({
      'customer_name': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'date': new FormControl(null, [Validators.required]),
      'litre': new FormControl(null, [Validators.required]),
      'amount': new FormControl(null, [Validators.required]),
      'vat': new FormControl(null, [Validators.required]),
      'total': new FormControl(null, [Validators.required]),
      'old_balance': new FormControl(null, [Validators.required])
    });
  }

}
