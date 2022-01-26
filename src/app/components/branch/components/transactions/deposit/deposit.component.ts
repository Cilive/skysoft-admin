import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { DepositsService } from 'src/app/services/deposits/deposits.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from 'src/app/services/owners/owners.service';
import { Deposit } from './deposit.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  modalRef?: BsModalRef;
  deposits: Deposit[] = [];
  data: Deposit = {
    amount: '',
    date: new Date(),
    owner: '',
  };
  editMode = false;
  owners: { name: string; id?: number }[] = [];
  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private deposit: DepositsService,
    private owner: OwnersService
  ) {}

  ngOnInit(): void {
    this.deposit.get_deposits().subscribe((res) => {
      this.deposits = res.data.map((t) => {
        t.date = new Date(t.date);
        return t;
      });
    });
    this.owner.get_owners().subscribe((res) => {
      this.owners = res.data;
    });
  }
  onReset() {
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      this.deposit.post_deposit(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Deposit Added');
          clearForm('bnkForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.deposit.update_deposit(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Deposit Updated');
        clearForm('bnkForm');
        this.editMode = false;
        this.ngOnInit();
      }
    });
  }
  onEdit(item: Deposit) {
    this.editMode = true;
    this.data = {
      amount: item.amount,
      date: item.date,
      owner: item.owner,
      id: item.id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.deposit.delete_deposit(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Deposit Deleted');
      }
    });
  }
}
