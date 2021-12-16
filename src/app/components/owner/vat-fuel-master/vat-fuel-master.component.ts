import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { clearForm, validateForm } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-vat-fuel-master',
  templateUrl: './vat-fuel-master.component.html',
  styleUrls: ['./vat-fuel-master.component.scss']
})
export class VatFuelMasterComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  customerForm: FormGroup;
  counts = [];
  total: number = 0;
  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  public onSubmit(): void {
    console.log(this.counts);

    if (validateForm('form') && this.passError) {
      // this.customerService.postSupplier(this.customerForm.value).subscribe(res => {
      //   // this.onReset();
      // });
    }
  }

  count() {
    // console.log(e);
    if (this.counts.length < 5) {
      this.total++;
      this.counts = new Array(this.total);
    }
  }

  public onReset(): void {
    this.customerForm.reset();
    clearForm('form');
    this.counts = [];
    this.editMode = false;
  }

  private prepareForm() {
    this.customerForm = new FormGroup({
      'vat': new FormControl(null, [Validators.required]),
      'ar_name': new FormControl(null, [Validators.required]),
      'en_place': new FormControl(null, [Validators.required]),
      'ar_place': new FormControl(null, [Validators.required]),
      'en_district': new FormControl(null, [Validators.required]),
      'ar_district': new FormControl(null, [Validators.required]),
      'vat_no': new FormControl(null, [Validators.required]),
      'lan_no': new FormControl(null, [Validators.required]),
      'mobile_no': new FormControl(null, [Validators.required]),
    });
  }

}
