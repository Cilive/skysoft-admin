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
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from './branch-manager.model';

import jsPDF from 'jspdf';

import pdfMake from 'pdfmake/build/pdfmake';

import pdfFonts from 'pdfmake/build/vfs_fonts';

pdfMake.vfs = pdfFonts.pdfMake.vfs;

import htmlToPdfmake from 'html-to-pdfmake';

@Component({
  selector: 'app-branch-manager',
  templateUrl: './branch-manager.component.html',
  styleUrls: ['./branch-manager.component.scss'],
})
export class BranchManagerComponent implements OnInit {
  //pdf generating function

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
  data: Branchmanager = {
    email: '',
    name: '',
    password: '',
    phone: '',
    username: '',
    iqama_no: '',
    branches: '',
    // user: '',
    is_superuser: false,
    is_company: false,
    is_active: false,
    is_employee: false,
    is_branch_user: false,
    is_staff: false,
    is_admin: false,
    is_super_admin: false,
    created_at: undefined,
    updated_at: undefined,
    date_joined: undefined,
    last_login: undefined,
    groups: [],
    user_permissions: [],
    en_name: '',
    ar_name: '',
    en_place: '',
    ar_place: '',
    en_district: '',
    ar_district: '',
    cr_no: '',
    vat_no: '',
    lan_no: '',
    logo: null,
    status: false,
    company: 0,
    value: undefined,
    supplierProfile: '',
  };
  employeesList: Branchmanager[] = [];
  Branch_ManagerList: Branchmanager[];
  // branch: any;
  branchesList: Branchmanager[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private Branchmanager: BranchManagerService,
    private branches: BranchManagerService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();

    this.Branchmanager.get_branch_manager().subscribe((res) => {
      if (res.msg === 'Success') {
        this.Branch_ManagerList = res.data;
      }
    });

    //branch listing function

    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }

  public onSubmit(): void {
    // console.log(this.data);
    if (validateForm('emp_form')) {
      this.Branchmanager.post_branch_manager(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success(' branchmanagerAdded Successfully');
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

  public onEdit(item: Branchmanager): void {
    this.editMode = true;
    this.data = {
      username: item.username,
      password: item.password,
      iqama_no: item.iqama_no,
      email: item.user.email,
      name: item.name,
      phone: item.phone,
      id: item.id,
      branches: item.branches,

      is_superuser: item.is_superuser,
      is_company: item.is_company,
      is_active: item.is_active,
      is_employee: item.is_employee,
      is_branch_user: item.is_branch_user,
      is_staff: item.is_staff,
      is_admin: item.is_admin,
      is_super_admin: item.is_super_admin,
      created_at: item.created_at,
      updated_at: item.updated_at,
      date_joined: item.date_joined,
      last_login: item.last_login,
      groups: item.groups,
      user_permissions: item.user_permissions,
    };
  }
  public onUpdate() {
    if (validateForm('emp_form')) {
      this.Branchmanager.update_branch_manager(
        this.data,
        this.data.id
      ).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Employee Updated Successfully');
          this.ngOnInit();
          this.onReset();
        }
      });
    }
  }

  public onDelete(id) {
    this.Branchmanager.delete_branch_manager(id).subscribe((res) => {
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
    this.Branchmanager.suspend_branch_manager(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success(' Employee Added To Suspended List');
        this.ngOnInit();
      }
    });
  }
}
