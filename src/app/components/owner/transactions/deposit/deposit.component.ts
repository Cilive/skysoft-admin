import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Branch } from 'src/app/components/branch/branch.modal';
import { BankAccounts } from 'src/app/components/branch/components/bank-account-master/bank-account-master.model';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from 'src/app/services/bank-account-master/bank-account-master.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { DepositsService } from 'src/app/services/deposits/deposits.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from 'src/app/services/owners/owners.service';
// import { BankAccounts } from '../../bank-account-master/bank-account-master.model';
import { Deposit } from './deposit.model';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  branch: Branch;
  data: Deposit = {
    amount: '',
    date: new Date(),
    branches: '',
    owner: '',
    bank_ac_id: null,
    // id: null,
  };
  branchesList: Branch[] = [];
  editMode = false;
  owners: { name: string; id?: number }[] = [];
  deposits: Deposit[] = [];
  bankacList: BankAccounts[] = [];
  // bankacs: BankAccounts[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private deposit: DepositsService,
    private owner: OwnersService,
    private branches: BranchManagerService,
    private bank: BankAccountMasterService
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

    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }

  onReset() {
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      // console.log(this.data);
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
      branches: item.branches,
      bank_ac_id: item.bank_ac_id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  bank_ac_listing(): void {
    this.bank.get_bank_ac(this.data.branches).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.bankacList = res.data;
      }
    });
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
