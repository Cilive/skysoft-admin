import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { ChangePasswordService } from 'src/app/services/change-password/change-password.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { ChangePassword } from './change-password.modal';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss'],
})
export class ChangePasswordComponent implements OnInit {
  modalRef?: BsModalRef;
  owners = [];
  // baranchlist: Branch[] = [];

  data: ChangePassword = {
    email: '',
    password: '',
  };
  editMode = false;
  body = {};
  id: number;

  constructor(
    private modalService: BsModalService,
    private password: ChangePasswordService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    //   this.password.get_owners().subscribe((res) => {
    //     this.owners = res.data;
    //   });
    // }
  }
  onReset() {
    clearForm('form');
  }
  onSubmit() {
    if (validateForm('form')) {
      console.log('form inputs', this.data);
      let data = {};
      data['email'] = this.data.email;
      data['password'] = this.data.password;

      console.log('New Data Object', data);

      this.password.post_change_password(data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Password Changed Successfully');
          clearForm('form');
          this.ngOnInit();
        }
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
