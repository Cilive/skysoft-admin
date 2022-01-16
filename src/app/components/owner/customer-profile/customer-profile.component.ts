import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CustomerProfileService } from 'src/app/services/customer-profile/customer-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { CustomerProfile } from './customer-profile.modal';

@Component({
  selector: 'app-customer-profile',
  templateUrl: './customer-profile.component.html',
  styleUrls: ['./customer-profile.component.scss'],
})
export class CustomerProfileComponent implements OnInit {
  modalRef?: BsModalRef;
  editMode: boolean;
  customers: CustomerProfile[] = [];
  data: CustomerProfile = {
    en_name: '',
    ar_name: '',
    en_place: '',
    ar_place: '',
    en_district: '',
    ar_district: '',
    vat_no: null,
    lan_no: null,
    mobile_no: null,
  };
  id: number;
  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private customerService: CustomerProfileService
  ) {}

  ngOnInit(): void {
    this.customerService.get_customer_profiles().subscribe((res) => {
      this.customers = res.data;
    });
  }
  public onSubmit(): void {
    if (validateForm('form')) {
      this.customerService.post_customer_profile(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Customer Added Successful');
          this.onReset();
          this.ngOnInit();
        }
      });
    }
  }
  public onUpdate() {
    if (validateForm('form')) {
      this.customerService
        .update_customer_profile(this.data, this.data.id)
        .subscribe((res) => {
          if (res.msg === 'Success') {
            this.toast.success('Customer Updated Successful');
            this.ngOnInit();
            this.onReset();
          }
        });
    }
  }

  public onReset(): void {
    this.editMode = false;
    clearForm('form');
  }

  public onEdit(item: CustomerProfile): void {
    this.editMode = true;
    this.data = {
      en_name: item.en_name,
      ar_name: item.ar_name,
      en_place: item.en_place,
      ar_place: item.ar_place,
      en_district: item.en_district,
      ar_district: item.ar_district,
      vat_no: item.vat_no,
      lan_no: item.lan_no,
      mobile_no: item.mobile_no,
      id: item.id,
    };
  }

  public onDelete(id) {
    this.customerService.delete_customer_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef.hide();
        this.toast.success('Selected Customer Deleted');
        this.ngOnInit();
      }
    });
  }
  public onSuspend(id) {
    this.customerService.suspend_customer_profile(id).subscribe((res) => {
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
