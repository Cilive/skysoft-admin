import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { DepositBranchService } from 'src/app/services/services/depositBranch/deposit-branch.service';
import { BankAccounts } from '../../branch/components/bank-account-master/bank-account-master.model';
import { BankAccountMasterService } from '../../branch/services/bank-account-master/bank-account-master.service';
import { OwnersService } from '../../branch/services/owners/owners.service';
import { DepositAmountBranch } from './deposit-branch.modal';

@Component({
  selector: 'app-deposit-branch',
  templateUrl: './deposit-branch.component.html',
  styleUrls: ['./deposit-branch.component.scss'],
})
export class DepositBranchComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: DepositAmountBranch = {
    date: new Date(),
    // branch: '',
    owner: '',
    id: 0,
    amount: null,
    company: 0,
    bank: null,
    ac_holder_name: null,
    updated_at: new Date(),
    ac_number: null,
  };
  // branchesList: Branchmanager[] = [];
  editMode = false;
  owners: { name: string; id?: number }[] = [];
  deposit: DepositAmountBranch[] = [];
  bankacList: BankAccounts[] = [];
  amount: DepositAmountBranch[] = [];
  // Depositamount: DepositAmount[] = [];
  // bankacs: BankAccounts[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private deposite: DepositBranchService,
    private owner: OwnersService,
    private bank: BankAccountMasterService
  ) {}

  ngOnInit(): void {
    // this.deposit.get_deposit_amount().subscribe((res) =>{
    // this.deposits = res.data.((t) => {
    //   t.date = new Date(t.date);
    //   return t;
    // });
    // });

    this.bank.get_bank_ac().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.bankacList = res.data;
      }
    });

    this.owner.get_owners().subscribe((res) => {
      console.log(res.data);

      this.owners = res.data;
    });
  }

  onReset() {
    clearForm('bankForm');
  }
  // onSubmit() {
  //   if (validateForm('bnkForm')) {
  //     console.log(this.data);
  //     this.deposit.get_deposit_amount(this.data).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.toast.success('Deposit Added');
  //         this.Depositamount = res.data.data;

  //         console.log(this.data);

  //         this.amount = res.data.amount.amount;

  //         clearForm('bnkForm');
  //         this.ngOnInit();
  //       }
  //     });
  //   }
  // }
  onSubmit() {
    if (validateForm('bankForm')) {
      console.log(this.data);
      this.deposite.get_deposit_amount(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Deposit Amount Added Successfully');
          this.deposit = res.data.data;
          console.log(this.data);

          this.amount = res.data.amount.amount;
          clearForm('bankForm');
          this.ngOnInit();
        }
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  bank_ac_listing(): void {}
}
