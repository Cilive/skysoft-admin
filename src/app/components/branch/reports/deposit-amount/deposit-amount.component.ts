import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from 'src/app/services/bank-account-master/bank-account-master.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import { DepositamountService } from 'src/app/services/depositamount/depositamount.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from 'src/app/services/owners/owners.service';
import { BankAccounts } from '../../components/bank-account-master/bank-account-master.model';
import { DepositAmount } from './Deposit-Amount.modal';

@Component({
  selector: 'app-deposit-amount',
  templateUrl: './deposit-amount.component.html',
  styleUrls: ['./deposit-amount.component.scss'],
})
export class DepositAmountComponent implements OnInit {
  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: DepositAmount = {
    date: new Date(),
    branch: '',
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
  deposit: DepositAmount[] = [];
  bankacList: BankAccounts[] = [];
  amount: DepositAmount[] = [];
  // Depositamount: DepositAmount[] = [];
  // bankacs: BankAccounts[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private deposite: DepositamountService,
    private owner: OwnersService,
    // private branches: BranchManagerService,
    private bank: BankAccountMasterService
  ) {}

  ngOnInit(): void {
    // this.deposit.get_deposit_amount().subscribe((res) =>{
    // this.deposits = res.data.((t) => {
    //   t.date = new Date(t.date);
    //   return t;
    // });
    // });
    this.owner.get_owners().subscribe((res) => {
      this.owners = res.data;
    });

    // this.branches.get_branches().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);

    //     this.branchesList = res.data;
    //   }
    // });
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
          // this.net_amount_sum = res.data.total.net_amount_sum;
          // this.net_vat_sum = res.data.total.net_vat_sum;
          this.amount = res.data.amount.amount;
          clearForm('bankForm');
          this.ngOnInit();
        }
      });
    }
  }
  // onUpdate() {
  //   this.deposite
  //     .update_deposit_amount(this.data, this.data.id)
  //     .subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.toast.success('Deposit Amount Updated');
  //         clearForm('bnkForm');
  //         this.editMode = false;
  //         this.ngOnInit();
  //       }
  //     });
  // }
  // onEdit(item: DepositAmount) {
  //   this.editMode = true;
  //   this.data = {
  //     amount: item.amount,
  //     date: item.date,
  //     owner: item.owner,
  //     id: item.id,
  //     branch: item.branch,
  //     company: item.company,
  //     bank: item.bank,
  //     ac_holder_name: item.ac_holder_name,
  //     ac_number: item.ac_number,
  //     updated_at: item.updated_at,
  //   };
  // }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  bank_ac_listing(): void {
    this.bank.get_bank_ac(this.data.branch).subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.bankacList = res.data;
      }
    });
  }

  // decline(): void {}
  // onDelete(id) {
  //   this.deposit.deposit_amount(id).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       this.modalRef?.hide();
  //       this.ngOnInit();
  //       this.toast.success('Deposit Deleted');
  //     }
  //   });
  // }

  //   ngOnInit(): void {
  //     this.deposits.get_deposit_amount().subscribe((res) => {
  //       this.deposit = res.data.map((t) => {
  //         t.date = new Date(t.date);
  //         return t;
  //       });
  //     });
  //     this.owner.get_owners().subscribe((res) => {
  //       this.owners = res.data;
  //     });

  //     this.branches.get_branches().subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         console.log(res.data);

  //         this.branchesList = res.data;
  //       }
  //     });
  //   }

  //   onReset() {
  //     clearForm('bnkForm');
  //   }
  //   onSubmit() {
  //     if (validateForm('bnkForm')) {
  //       // console.log(this.data);
  //       this.deposits.post_deposit_amount(this.data).subscribe((res) => {
  //         if (res.msg === 'Success') {
  //           this.toast.success('Deposit Amount Added');
  //           this.deposit = res.data.data;

  //           console.log(this.data);

  //           this.amount = res.data.amount.amount;

  //           clearForm('bnkForm');
  //           this.ngOnInit();
  //         }
  //       });
  //     }
  //   }
  //   onUpdate() {
  //     this.deposits
  //       .update_deposit_amount(this.data, this.data.id)
  //       .subscribe((res) => {
  //         if (res.msg === 'Success') {
  //           this.toast.success('Deposit Updated');
  //           clearForm('bnkForm');
  //           this.editMode = false;
  //           this.ngOnInit();
  //         }
  //       });
  //   }
  //   onEdit(item: DepositAmount) {
  //     this.editMode = true;
  //     this.data = {
  //       amount: item.amount,
  //       date: item.date,
  //       owner: item.owner,
  //       id: item.id,
  //       branch: item.branch,
  //       company: item.company,
  //       bank: item.bank,
  //       ac_holder_name: item.ac_holder_name,
  //       ac_number: item.ac_number,
  //     };
  //   }
  //   openModal(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  //   }
  //   bank_ac_listing(): void {
  //     this.bank.get_bank_ac(this.data.branch).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         console.log(res.data);

  //         this.bankacList = res.data;
  //       }
  //     });
  //   }

  //   decline(): void {}
  //   onDelete(id) {
  //     this.deposits.delete_deposit_amount(id).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.modalRef?.hide();
  //         this.ngOnInit();
  //         this.toast.success('Deposit Deleted');
  //       }
  //     });
  //   }
  // }
}
