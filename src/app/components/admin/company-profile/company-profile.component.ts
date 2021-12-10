import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { clearForm, validateForm } from 'src/app/services/general/general.service';
import { CompanyProfile } from './company-profile.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit {
  modalRef?: BsModalRef;
  companyForm: FormGroup;
  companies: CompanyProfile[] = [{
    company_name_en: 'First',
    company_name_ar: 'second',
    place_en: 'kerala',
    place_ar: 'india',
    district_en: 'malappuram',
    district_ar: 'kochi',
    cr: 1,
    vat: 2,
    lan: 3,
    mobile: 4,
    logo: 'sdfs',
  }, {
    company_name_en: 'Second',
    company_name_ar: 'first',
    place_en: 'india',
    place_ar: 'kerala',
    district_en: 'malappuram',
    district_ar: 'kochi',
    cr: 12,
    vat: 2213,
    lan: 12123,
    mobile: 124,
    logo: 'sdfs',
  }]

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  public onSubmit(): void {
    if (validateForm('form')) {
      this.companies.push(this.companyForm.value);
      this.onReset();
    }
  }

  public onReset(): void {
    this.companyForm.reset();
    clearForm('form');
  }

  public selectFile(event): void {
    this.companyForm.value['logo'] = event.target.files[0].name;
  }

  public onEdit(item: CompanyProfile): void {
    this.companyForm.setValue(item);
  }

  public onDelete(id) {
    this.companies.splice(id, 1)
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
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
