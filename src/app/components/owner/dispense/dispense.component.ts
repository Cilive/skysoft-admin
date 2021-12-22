import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from 'src/app/services/bank-account-master/bank-account-master.service';
import { DispensesService } from 'src/app/services/dispenses/dispenses.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { BankAccounts } from '../bank-account-master/bank-account-master.model';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.scss'],
})
export class DispenseComponent implements OnInit {
  modalRef?: BsModalRef;
  dispenses = [];
  data: { name: String; id?: number } = {
    name: '',
  };
  editMode = false;
  constructor(
    private modalService: BsModalService,
    private dispense: DispensesService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    this.dispense.get_dispenses().subscribe((res) => {
      this.dispenses = res.data;
    });
  }
  onReset() {
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      this.dispense.post_dispense(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Dispense Added');
          clearForm('bnkForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.dispense.update_dispense(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Dispense Updated');
        clearForm('bnkForm');
        this.ngOnInit();
      }
    });
  }
  onEdit(item) {
    this.editMode = true;
    this.data = {
      name: item.name,
      id: item.id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.dispense.delete_dispense(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Dispense Deleted');
      }
    });
  }
}
