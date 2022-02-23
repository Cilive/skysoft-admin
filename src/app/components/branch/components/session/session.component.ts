import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { StoreService } from 'src/app/services/store/store.service';
import { SessionService } from '../../services/session/session.service';
import { Session } from './session.modal';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  modalRef?: BsModalRef;
  Disabled: false;
  // myFlag = true;
  // owners = [];
  // baranchlist: Branch[] = [];
  // session: Session[] = [];
  data: Session = {
    branch_name: '',
    id: null,
  };
  // editMode = false;
  // id: number;
  // branchesList: Branch[] = [];
  // Ownerlist: CompanyOwnerComponent[] = [];
  session: Session[];

  constructor(
    private modalService: BsModalService,
    private sessions: SessionService,
    private toast: AlertService
  ) {
    console.log(new StoreService().retrieve('id'));
  }

  ngOnInit(): void {
    this.sessions.get_session().subscribe((res) => {
      this.session = res.data;
    });
    {
      this.Disabled = false;
      this.data.status = false;
    }
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.sessions.post_session(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('session Added successfully');
          // this.session = res.data.data;
          console.log(this.data.id);
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }

  onUpdate() {
    if (validateForm('form')) {
      console.log(this.data);
      let item = this.sessions;
      // console.log(item.closing_balance_cash);

      // this.sessions.update_session(this.data, this.data.id).subscribe((res) => {
      //   if (res.msg === 'Success') {
      //     this.toast.success('Session Updated Successfully');
      //     this.ngOnInit();

      //     // this.onReset();
      //   }
      // });
    }
  }
  onEdit(item) {
    console.log(item.id);
    //  this.session.single_get_purchase_invoice(data.id).subscribe((res) => {
    //   this.data = res.data.session;
    // const item = res.data;

    // this.editMode = true;
    this.data = {
      branch_name: item.branch_name,
      id: item.id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
