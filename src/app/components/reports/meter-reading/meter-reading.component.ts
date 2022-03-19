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
import { DispensesService } from 'src/app/services/dispenses/dispenses.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { MeterReadigService } from 'src/app/services/meter-readig/meter-readig.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../../owner/branch-manager/branch-manager.model';
import { Dispense } from '../../owner/dispense/dispense .modal';
import { Meterreading } from './meter-reading.modal';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-meter-reading',
  templateUrl: './meter-reading.component.html',
  styleUrls: ['./meter-reading.component.scss'],
})
export class MeterReadingComponent implements OnInit {
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
  data: Meterreading = {
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
    branch: '',
    employee_name: '',
    payable_amount_sum: 0,
  };
  branchesList: Branchmanager[] = [];
  // Customer: CustomerProfile[] = [];
  // customerList: CustomerProfile[] = [];
  // salesdetailes: Salesdetailes[] = [];
  // salese: Salesdetailes[] = [];
  // amount: Debtors[] = [];
  editMode = false;
  // customerList: CustomerProfile[] = [];
  payable_amount_sum: Meterreading[] = [];
  meterreading: Meterreading[] = [];
  dispencerList: Dispense[] = [];

  constructor(
    private branches: BranchManagerService,
    private toast: AlertService,
    private dispence: DispensesService,
    // private customer: CustomerProfileService,
    // private customerService: CustomerProfileService,
    // private payment: PaymentOutService,
    // private sales: SalesdetilesService,
    private modalService: BsModalService,
    private meter: MeterReadigService
  ) {}

  ngOnInit(): void {
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }
  // payment_in(): void {
  //   this.payment.get_payment_in(this.data.id).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       console.log(res.data);
  //     }
  //   });
  // }
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
          // this.net_amount_sum = res.data.total.net_amount_sum;
          // this.net_vat_sum = res.data.total.net_vat_sum;
          this.payable_amount_sum = res.data.total.payable_amount_sum;
          clearForm('Form');
          this.ngOnInit();
        }
      });
    }
  }
  dispencerlistin(): void {
    this.dispence.get_brnch_dispence().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.dispencerList = res.data;
      }
    });
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
}

// readings = [];
// from: Date = new Date();
// to: Date = new Date();
// dispenses: { name: string; id: number }[];
// selectedDispense = '';
// constructor(
//   private meterReadingService: MeterReadigService,
//   private dispense: DispensesService
// ) {}

// ngOnInit(): void {
//   this.dispense.get_dispenses().subscribe((res) => {
//     this.dispenses = res.data;
//   });
// }
// onSelectDispense() {
//   this.meterReadingService
//     .getReports(this.selectedDispense)
//     .subscribe((res) => {
//       console.log(res);
//     });
// }
