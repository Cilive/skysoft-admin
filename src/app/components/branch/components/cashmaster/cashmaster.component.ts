import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { CashmasterService } from '../../services/cashmaster/cashmaster.service';
import { OwnersService } from '../../services/owners/owners.service';
import { Owner } from '../company-owner/company-owner.modal';
import { BranchCashmaster } from './cashmaster.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-cashmaster',
  templateUrl: './cashmaster.component.html',
  styleUrls: ['./cashmaster.component.scss'],
})
export class CashmasterComponent implements OnInit {
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
  cashmaster: BranchCashmaster[] = [];
  data: BranchCashmaster = {
    opening_balance: 0,
    balance: 0,
    owner: '',
    cash_ac_name: '',
  };
  editMode = false;
  ownersList: Owner[] = [];

  constructor(
    private modalService: BsModalService,
    private cash: CashmasterService,
    private toast: AlertService,
    private owner: OwnersService
  ) {}

  ngOnInit(): void {
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
      // console.log(this.data);
      this.cash.post_branch_cashmaster(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Cash added successfully');
          clearForm('cashForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.cash
      .update_branch_cashmaster(this.data, this.data.id)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Cash updated successfully');
          clearForm('cashForm');
          this.ngOnInit();
        }
      });
  }
  onEdit(item: BranchCashmaster) {
    this.editMode = true;
    this.data = {
      opening_balance: item.opening_balance,
      balance: item.balance,
      owner: item.owner,
      cash_ac_name: item.cash_ac_name,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.cash.delete_branch_cashmaster(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('cash Account Deleted');
      }
    });
  }
}
