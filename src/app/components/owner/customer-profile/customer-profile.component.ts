import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile/customer-profile/customer-profile.service';
import { clearForm, validateForm } from 'src/app/services/general/general.service';
import { CustomerProfile } from './customer-profile.modal';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss']
})
export class CustomerProfileComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  customerForm: FormGroup;
  customers: CustomerProfile[] = [{
    en_name: 'First',
    ar_name: 'second',
    en_place: 'kerala',
    ar_place: 'india',
    en_district: 'malappuram',
    ar_district: 'kochi',
    vat_no: 2,
    lan_no: 3,
    mobile_no: 4
  }, {
    en_name: 'Second',
    ar_name: 'first',
    en_place: 'india',
    ar_place: 'kerala',
    en_district: 'malappuram',
    ar_district: 'kochi',
    vat_no: 2213,
    lan_no: 12123,
    mobile_no: 124
  }]
  constructor(private modalService: BsModalService,
    private customerService: CustomerProfileService) { }

  ngOnInit(): void {
    this.prepareForm();
  }

  public onSubmit(): void {
    this.checkPassword(this.customerForm.value['confirm_password']);
    if (validateForm('form') && this.passError) {
      // this.customerService.postSupplier(this.customerForm.value).subscribe(res => {
      //   // this.onReset();
      // });
    }
  }

  public onReset(): void {
    this.customerForm.reset();
    clearForm('form');
    this.editMode = false;
  }

  public selectFile(event): void {
    this.customerForm.value['logo'] = event.target.files[0].name;
  }

  public onEdit(item: CustomerProfile): void {
    this.editMode = true;
    this.customerForm.setValue(item);
  }

  public onDelete(id) {
    this.customers.splice(id, 1)
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  private checkPassword(value: string) {
    if (this.customerForm.value['password'] === value) {
      this.passError = false;
    } else {
      this.passError = true;
    }
  }

  private prepareForm() {
    this.customerForm = new FormGroup({
      'en_name': new FormControl(null, [Validators.required]),
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
