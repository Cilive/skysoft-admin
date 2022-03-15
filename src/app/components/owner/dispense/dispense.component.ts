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
import { DispensesService } from 'src/app/services/dispenses/dispenses.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { BankAccounts } from '../bank-account-master/bank-account-master.model';
import { Branch } from '../../branch/branch.modal';
import { Dispense } from './dispense .modal';
import { Branchmanager } from '../branch-manager/branch-manager.model';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-dispense',
  templateUrl: './dispense.component.html',
  styleUrls: ['./dispense.component.scss'],
})
export class DispenseComponent implements OnInit {
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
  dispenses = [];
  data: Dispense = {
    name: '',
    branches: '',
  };
  editMode = false;
  branchesList: Branchmanager[] = [];
  DispenseList: Dispense[] = [];
  id: number;
  dispenseService: any;

  constructor(
    private modalService: BsModalService,
    private dispense: DispensesService,
    private toast: AlertService,
    private branches: BranchManagerService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.dispense.get_dispenses().subscribe((res) => {
      this.dispenses = res.data;
    });
    //this.branch listing api
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
      this.dispense.post_dispense(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Dispense Added');
          clearForm('bnkForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.dispense.update_dispense(this.data, this.data.id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Dispense Updated');
        clearForm('bnkForm');
        this.ngOnInit();
      }
    });
  }
  onEdit(item: Dispense): void {
    this.editMode = true;
    this.data = {
      name: item.name,
      id: item.id,
      branches: item.branches,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.dispense.delete_dispense(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Dispense Deleted');
      }
    });
  }
  public onSuspend(id) {
    this.dispenseService.suspend_customer_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('dispense Added to Suspend List');
      }
    });
  }
}
