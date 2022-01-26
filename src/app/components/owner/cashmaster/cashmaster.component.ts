import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { CashmasterService } from 'src/app/services/cashmaster/cashmaster.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from 'src/app/services/owners/owners.service';
import { Branch } from '../../branch/branch.modal';
import { Owner } from '../company-owner/company-owner.model';
import { Cashmaster } from './cashmaster.modal';
// import { BankAccounts } from './bank-account-master.model';

@Component({
  selector: 'app-cashmaster',
  templateUrl: './cashmaster.component.html',
  styleUrls: ['./cashmaster.component.scss'],
})
export class CashmasterComponent implements OnInit {
  modalRef?: BsModalRef;
  cashmaster: Cashmaster[] = [];
  data: Cashmaster = {
    opening_balance: 0,
    balance: 0,
    owner: '',
    cash_ac_name: '',
    branches: '',
  };
  editMode = false;
  branchesList: Branch[] = [];
  ownersList: Owner[] = [];

  constructor(
    private modalService: BsModalService,
    private Cash: CashmasterService,
    private toast: AlertService,
    private branches: BranchManagerService,
    private owner: OwnersService
  ) {}

  ngOnInit(): void {
    // // this.prepareForm();
    // this.Cash.get_Cashmaster().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     this.cashmaster = res.data;
    //   }
    // });
    //this.branch listing api
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
    //this.branch listing api
    this.owner.get_owners().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.ownersList = res.data;
      }
    });
  }
  onReset() {
    this.editMode = false;
    clearForm('cashForm');
  }
  onSubmit() {
    if (validateForm('cashForm')) {
      this.Cash.post_Cashmaster(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Cash added successfully');
          clearForm('cashForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.Cash.update_Cashmaster(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Cash updated successfully');
        clearForm('cashForm');
        this.ngOnInit();
      }
    });
  }
  onEdit(item: Cashmaster) {
    this.editMode = true;
    this.data = {
      opening_balance: item.opening_balance,
      balance: item.balance,
      owner: item.owner,
      cash_ac_name: item.cash_ac_name,
      branches: item.branches,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.Cash.delete_Cashmaster(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Bank Account Deleted');
      }
    });
  }
}
