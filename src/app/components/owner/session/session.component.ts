import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SessionService } from 'src/app/services/session/session.service';
// import { OwnersService } from 'src/app/services/owners/owners.service';
import { Branchmanager } from '../branch-manager/branch-manager.model';
import { BranchComponent } from '../branch/branch.component';
import { Branch } from '../branch/branch.modal';
import { Session } from './session.modal';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  modalRef?: BsModalRef;
  session = [];
  // owners = [];
  // baranchlist: Branch[] = [];
  Session: Session[] = [];
  data: Session = {
    branches: '',
    // opening_balance_bank: 0,
    // cash_opening_balance: 0,
    // closing_balance_bank: null,
    // closing_balance_cash: null,
    // total_transactions: null,
    // total_sales: null,
    // total_purchase: null,
    // total_expense: null,
    // total_cash_sales: null,
    // total_cash_purchase: null,
    // total_bank_purchase: null,
    // total_bank_sales: null,
    // date: undefined,
    // created_at: undefined,
    // updated_at: undefined,
    // status: false,
    // company: 0,
    // bank: 0,
  };
  editMode = false;
  id: number;
  branchesList: Branch[] = [];
  // Ownerlist: CompanyOwnerComponent[] = [];

  constructor(
    private modalService: BsModalService,
    private sessions: SessionService,
    private toast: AlertService,
    private branches: BranchManagerService // private sessions: SessionService
  ) {}

  ngOnInit(): void {
    // this.sessions.get_session().subscribe((res) => {
    //   this.session = res.data;
    // });
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }
  onReset() {
    clearForm('sessionForm');
  }

  // open_session() {
  //   if (validateForm('sessionForm')) {
  //     this.sessions.post_session(this.data).subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.toast.success('session Added successfully');
  //         clearForm('sessionForm');
  //         this.ngOnInit();
  //       }
  //     });
  //   }
  // }

  onSubmit() {
    if (validateForm('sessionForm')) {
      console.log(this.data);
      this.sessions.post_session(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('session Added successfully');
          clearForm('sessionForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.sessions.update_session(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('session Updated  successfully');
        clearForm('sessionForm');
        this.editMode = false;
        this.ngOnInit();
      }
    });
  }
  onEdit(item) {
    this.editMode = true;
    this.data = {
      opening_balance_bank: item.opening_balance_bank,
      cash_opening_balance: item.cash_opening_balance,
      closing_balance_bank: item.closing_balance_bank,
      closing_balance_cash: item.closing_balance_cash,
      total_transactions: item.total_transactions,
      total_sales: item.total_sales,
      total_purchase: item.total_purchase,
      total_expense: item.total_expense,
      total_cash_sales: item.total_cash_sales,
      total_cash_purchase: item.total_cash_purchase,
      total_bank_purchase: item.total_bank_purchase,
      total_bank_sales: item.total_bank_sales,
      date: item.date,
      created_at: item.created_at,
      updated_at: item.update_at,
      status: item.status,
      company: item.company,
      bank: item.bank,
      branches: item.branches,
      id: item.id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.sessions.delete_session(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('session Deleted  successfully');
      }
    });
  }
}
