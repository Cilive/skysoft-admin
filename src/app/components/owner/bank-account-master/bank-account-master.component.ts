import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BankAccountMasterService } from 'src/app/services/bank-account-master/bank-account-master.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { OwnersService } from 'src/app/services/owners/owners.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../branch-manager/branch-manager.model';
import { Owner } from '../company-owner/company-owner.model';
import { BankAccounts } from './bank-account-master.model';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-bank-account-master',
  templateUrl: './bank-account-master.component.html',
  styleUrls: ['./bank-account-master.component.scss'],
})
export class BankAccountMasterComponent implements OnInit {
  title = 'htmltopdf';

  @ViewChild('pdfTable') pdfTable: ElementRef;

  public downloadAsPDF() {
    const doc = new jsPDF();

    const pdfTable = this.pdfTable.nativeElement;

    var html = htmlToPdfmake(pdfTable.innerHTML);

    const documentDefinition = { content: html };

    pdfMake.createPdf(documentDefinition).open();
  }

  modalRef?: BsModalRef;
  bankaccounts: BankAccounts[] = [];
  data: BankAccounts = {
    acc_holder_name: '',
    acc_no: '',
    bank_name: '',
    branches: '',
    initial_balance: 0,
    balance: 0,
    owner: '',
    is_default: true,
  };
  editMode = false;
  branchesList: Branchmanager[] = [];
  ownersList: Owner[] = [];

  constructor(
    private modalService: BsModalService,
    private bank: BankAccountMasterService,
    private toast: AlertService,
    private branches: BranchManagerService,
    private owner: OwnersService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.bank.get_bank_accounts().subscribe((res) => {
      if (res.msg === 'Success') {
        this.bankaccounts = res.data;
      }
    });
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
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      // this.data.is_default = +this.data.is_default;
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
      // this.data.is_default = +this.data.is_default;

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
      branches: item.branches,
      id: item.id,
      owner: item.owner,
      initial_balance: item.initial_balance,
      balance: item.balance,
      is_default: item.is_default,
      is_active: item.is_active,
      credit_balance: item.credit_balance,
      debit_balance: item.debit_balance,
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
