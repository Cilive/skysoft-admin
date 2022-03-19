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
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PumpEmployeeService } from '../../services/pump-employee/pump-employee.service';
import { PumbEmployee } from './pump-employee.model';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-pump-employee',
  templateUrl: './pump-employee.component.html',
  styleUrls: ['./pump-employee.component.scss'],
})
export class PumpEmployeeComponent implements OnInit {
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

  passError: boolean = false;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  PumpEmployeeForm: FormGroup;
  data: PumbEmployee = {
    email: '',
    name: '',
    password: '',
    phone: '',
    iqama_no: '',
    username: '',
  };
  employeesList: PumbEmployee[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private employees: PumpEmployeeService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.employees.get_pump_employees().subscribe((res) => {
      if (res.msg === 'Success') {
        this.employeesList = res.data;
      }
    });
  }

  public onSubmit(): void {
    if (validateForm('emp_form')) {
      // console.log(this.data);
      this.employees.post_pump_employee(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Employee Added Successfully');
          this.ngOnInit();
          this.onReset();
        }
        // this.onReset();
      });
    }
  }

  public onReset(): void {
    clearForm('emp_form');
    this.editMode = false;
  }

  public selectFile(event: Event): void {
    // const targetInput = event.target as HTMLInputElement;
    // // if (targetInput.files.length > 0) {
    // //   const file = targetInput.files[0];
    // // }
  }

  public onEdit(item: PumbEmployee): void {
    this.editMode = true;
    this.data = {
      email: item.user.email,
      name: item.name,
      phone: item.phone,
      id: item.id,
      username: item.username,
      iqama_no: item.iqama_no,
    };
  }
  public onUpdate() {
    if (validateForm('emp_form')) {
      this.employees
        .update_pump_employee(this.data, this.data.id)
        .subscribe((res) => {
          if (res.msg === 'Success') {
            this.toast.success('Employee Updated Successfully');
            this.ngOnInit();
            this.onReset();
          }
        });
    }
  }

  public onDelete(id) {
    this.employees.delete_pump_employee(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Employee Deletion Successfull');
        this.ngOnInit();
      }
    });
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }
  suspend(id): void {
    this.employees.suspend_pump_employee(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success(' Employee Added To Suspended List');
        this.ngOnInit();
      }
    });
  }
}
