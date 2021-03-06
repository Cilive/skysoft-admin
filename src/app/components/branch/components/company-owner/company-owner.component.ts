import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from '../../services/owners/owners.service';
import { Owner } from './company-owner.modal';

@Component({
  selector: 'app-company-owner',
  templateUrl: './company-owner.component.html',
  styleUrls: ['./company-owner.component.scss'],
})
export class CompanyOwnerComponent implements OnInit {
  modalRef?: BsModalRef;
  owners = [];
  data: Owner = {
    name: '',
    phone: null,
    email: '',
  };
  editMode = false;
  constructor(
    private modalService: BsModalService,
    private owner: OwnersService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    this.owner.get_owners().subscribe((res) => {
      this.owners = res.data;
    });
  }
  onReset() {
    clearForm('ownerform');
  }
  onSubmit() {
    if (validateForm('ownerform')) {
      this.owner.post_owner(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('owner Added');
          clearForm('ownerform');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.owner.update_owner(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('owner Updated');
        clearForm('ownerform');
        this.editMode = false;
        this.ngOnInit();
      }
    });
  }
  onEdit(item) {
    this.editMode = true;
    this.data = {
      name: item.name,
      id: item.id,
      email: item.email,
      phone: item.phone,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.owner.delete_owner(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('owner Deleted');
      }
    });
  }
}
