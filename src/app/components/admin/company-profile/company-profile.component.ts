import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { clearForm, validateForm } from 'src/app/services/general/general.service';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  companyForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.prepareForm();
  }

  public onSubmit(): void {
    validateForm('form');
    console.log(this.companyForm.value);

  }

  public onReset(): void {
    this.companyForm.reset();
    clearForm('form');
  }

  public selectFile(event): void {
    this.companyForm.value['logo'] = event.target.files[0];
  }

  private prepareForm() {
    this.companyForm = new FormGroup({
      'company_name_en': new FormControl(null, [Validators.required]),
      'company_name_ar': new FormControl(null, [Validators.required]),
      'place_en': new FormControl(null, [Validators.required]),
      'place_ar': new FormControl(null, [Validators.required]),
      'district_en': new FormControl(null, [Validators.required]),
      'district_ar': new FormControl(null, [Validators.required]),
      'cr': new FormControl(null, [Validators.required]),
      'vat': new FormControl(null, [Validators.required]),
      'lan': new FormControl(null, [Validators.required]),
      'mobile': new FormControl(null, [Validators.required]),
      'logo': new FormControl(null, [Validators.required])
    });
  }

}
