import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SessionService } from 'src/app/services/session/session.service';
import { StoreService } from 'src/app/services/store/store.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../branch-manager/branch-manager.model';
import { Session } from './session.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss'],
})
export class SessionComponent implements OnInit {
  //pdf  generating function

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
  Disabled: false;

  data: Session = {
    branches: '',
    id: null,
  };

  branchesList: Branchmanager[] = [];

  session: Session[];

  constructor(
    private modalService: BsModalService,
    private sessions: SessionService,
    private toast: AlertService,
    private branches: BranchManagerService
  ) {
    console.log(new StoreService().retrieve('id'));
  }

  ngOnInit(): void {
    this.sessions.get_session().subscribe((res) => {
      this.session = res.data;
    });
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);
        this.branchesList = res.data;
      }
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
    }
  }
  onEdit(item) {
    console.log(item.id);

    this.data = {
      branches: item.branches,
      id: item.id,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
