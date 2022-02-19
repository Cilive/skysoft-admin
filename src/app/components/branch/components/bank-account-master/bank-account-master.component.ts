import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from '../../services/bank-account-master/bank-account-master.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { BankAccounts } from './bank-account-master.model';

@Component({
  selector: 'app-bank-account-master',
  templateUrl: './bank-account-master.component.html',
  styleUrls: ['./bank-account-master.component.scss'],
})
export class BankAccountMasterComponent implements OnInit {
  modalRef?: BsModalRef;
  bankaccounts: BankAccounts[] = [];
  data: BankAccounts = {
    acc_holder_name: '',
    acc_no: '',
    bank_name: '',
    initial_balance: 0,
    balance: 0,
    is_default: true,
  };
  editMode = false;

  constructor(
    private modalService: BsModalService,
    private bank: BankAccountMasterService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.bank.get_bank_accounts().subscribe((res) => {
      if (res.msg === 'Success') {
        this.bankaccounts = res.data;
      }
    });
  }
  onReset() {
    this.editMode = false;
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      this.data.is_default = +this.data.is_default;
      // console.log(this.data);

      this.bank.post_bank_account(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Bank Account added successfully');
          clearForm('bnkForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.bank.update_bank_account(this.data, this.data.id).subscribe((res) => {
      this.data.is_default = +this.data.is_default;

      if (res.msg === 'Success') {
        this.toast.success('Bank Account updated successfully');
        clearForm('bnkForm');
        this.ngOnInit();
      }
    });
  }
  onEdit(item: BankAccounts) {
    this.editMode = true;
    this.data = {
      acc_holder_name: item.acc_holder_name,
      acc_no: item.acc_no,
      bank_name: item.bank_name,
      id: item.id,
      initial_balance: item.initial_balance,
      balance: item.balance,
      is_default: item.is_default,
      is_active: item.is_active,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.bank.delete_bank_account(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Bank Account Deleted');
      }
    });
  }

  //   modalRef?: BsModalRef;
  //   bankaccounts: BankAccounts[] = [];
  //   data: BankAccounts = {
  //     acc_holder_name: '',
  //     acc_no: '',
  //     bank_name: '',
  //     initial_balance: 0,
  //     balance: 0,
  //   };
  //   editMode = false;
  //   constructor(
  //     private modalService: BsModalService,
  //     private bank: BankAccountMasterService,
  //     private toast: AlertService
  //   ) {}

  //   ngOnInit(): void {
  //     this.bank.get_bank_accounts().subscribe((res) => {
  //       this.bankaccounts = res.data;
  //     });
  //   }
  //   onReset() {
  //     clearForm('bnkForm');
  //   }
  //   onSubmit() {
  //     if (validateForm('bnkForm')) {
  //       this.bank.post_bank_account(this.data).subscribe((res) => {
  //         if (res.msg === 'Success') {
  //           this.toast.success('Bank Account added successfully');
  //           clearForm('bnkForm');
  //           this.ngOnInit();
  //         }
  //       });
  //     }
  //   }
  //   onUpdate() {
  //     this.bank.update_bank_account(this.data, this.data.id).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.toast.success('Bank Account updated successfully');
  //         clearForm('bnkForm');
  //         this.ngOnInit();
  //       }
  //     });
  //   }
  //   onEdit(item: BankAccounts) {
  //     this.editMode = true;
  //     this.data = {
  //       acc_holder_name: item.acc_holder_name,
  //       acc_no: item.acc_no,
  //       bank_name: item.bank_name,
  //       id: item.id,
  //       initial_balance: item.initial_balance,
  //       balance: item.balance,
  //     };
  //   }
  //   openModal(template: TemplateRef<any>) {
  //     this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  //   }

  //   decline(): void {}
  //   onDelete(id) {
  //     this.bank.delete_bank_account(id).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.modalRef?.hide();
  //         this.ngOnInit();
  //         this.toast.success('Bank Account Deleted');
  //       }
  //     });
  //   }
  // }
}
