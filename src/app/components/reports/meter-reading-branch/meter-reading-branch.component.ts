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
import { MeterReadingBranchService } from 'src/app/services/services/MeterReadingBranch/meter-reading-branch.service';
import { Dispense } from '../../branch/components/dispense/dispeanse.modal';
import { DispensesService } from '../../branch/services/dispenses/dispenses.service';
import { MeterreadingBranch } from './meter-reading-branch.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-meter-reading-branch',
  templateUrl: './meter-reading-branch.component.html',
  styleUrls: ['./meter-reading-branch.component.scss'],
})
export class MeterReadingBranchComponent implements OnInit {
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

  passError: boolean;
  modalRef?: BsModalRef;
  logoData: FormData;
  // branch: Branch;
  data: MeterreadingBranch = {
    date: new Date(),
    // branches: 0,
    start_reading: 0,
    updated_at: new Date(),
    end_reading: 0,
    payable_amt: 0,
    fuel: '',
    fuel_stock: null,
    dispencer: '',
    UOM: '',
    // branch: '',
    employee_name: '',
    payable_amount_sum: 0,
    gross_amt_sum: 0,
  };

  editMode = false;

  payable_amount_sum: MeterreadingBranch[] = [];
  meterreading: MeterreadingBranch[] = [];
  dispencerList: Dispense[] = [];

  constructor(
    private toast: AlertService,
    private dispence: DispensesService,

    private modalService: BsModalService,
    private meter: MeterReadingBranchService
  ) {}

  ngOnInit(): void {
    this.dispence.get_dispence().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.dispencerList = res.data;
      }
    });
  }

  public onReset(): void {
    clearForm('Form');
  }

  onSubmit() {
    if (validateForm('Form')) {
      console.log(this.data);
      this.meter.get_meter_reading(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Metre Reading Added Successfully');
          this.meterreading = res.data.data;
          console.log(this.data);

          this.payable_amount_sum = res.data.total.payable_amount_sum;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  // dispencerlistin(): void {}
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}
