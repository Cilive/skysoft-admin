import {
  Component,
  ElementRef,
  OnInit,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AddbranchService } from 'src/app/services/addbranch/addbranch.service';

import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Addbranch } from './addbranch.modal';
// import { Branchmanager } from './branch-manager.model';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-addbranch',
  templateUrl: './addbranch.component.html',
  styleUrls: ['./addbranch.component.scss'],
})
export class AddbranchComponent implements OnInit {
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
  editMode: boolean;
  titles: Addbranch;
  addbranchcomponentForm: FormGroup;
  data: Addbranch = {
    en_name: '',
    ar_name: '',
    en_place: '',
    ar_place: '',
    en_district: '',
    ar_district: '',
    vat_no: null,
    lan_no: null,
    phone: null,
    cr_no: '',
  };
  addbranch: Addbranch[];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private addbranchService: AddbranchService
  ) {}

  ngOnInit(): void {
    this.addbranchService.get_addbranch().subscribe((res) => {
      this.addbranch = res.data;
    });
  }

  public onSubmit(): void {
    if (validateForm('form')) {
      console.log(this.data);
      this.addbranchService.post_addbranch(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('branch Added Successful');
          this.onReset();
          this.ngOnInit();
        }
      });
    }
  }
  public onUpdate() {
    if (validateForm('form')) {
      this.addbranchService
        .update_addbranch(this.data, this.data.id)
        .subscribe((res) => {
          if (res.msg === 'Success') {
            this.toast.success('Customer Updated Successful');
            this.ngOnInit();
            this.onReset();
          }
        });
    }
  }

  public onReset(): void {
    this.editMode = false;
    clearForm('form');
  }

  public onEdit(item: Addbranch): void {
    this.editMode = true;
    this.data = {
      en_name: item.en_name,
      ar_name: item.ar_name,
      en_place: item.en_place,
      ar_place: item.ar_place,
      en_district: item.ar_district,
      ar_district: item.ar_district,
      vat_no: item.vat_no,
      lan_no: item.lan_no,
      phone: item.phone,
      cr_no: item.cr_no,
      id: item.id,
    };
  }

  public onDelete(id: number) {
    console.log(this.addbranch);
    this.addbranchService.delete_addbranch(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef.hide();
        this.toast.success('Selected branch Deleted');
        this.ngOnInit();
      }
    });
  }
  public onSuspend(id) {
    this.addbranchService.suspend_addbranch(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('branch Added to Suspend List');
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }
}
