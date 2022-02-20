import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { PumpEmployeeService } from 'src/app/services/pump-employee/pump-employee.service';
import { Branch } from '../../branch/branch.modal';
import { Branchmanager } from '../branch-manager/branch-manager.model';
import { Employee } from './pump-employee.model';

@Component({
  selector: 'app-pump-employee',
  templateUrl: './pump-employee.component.html',
  styleUrls: ['./pump-employee.component.scss'],
})
export class PumpEmployeeComponent implements OnInit {
  passError: boolean = false;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  PumpEmployeeForm: FormGroup;
  title: Branch;
  data: Employee = {
    email: '',
    name: '',
    password: '',
    phone: '',
    iqama_no: '',
    username: '',
    branches: '',
  };
  branchesList: Branchmanager[] = [];
  employeesList: Employee[] = [];

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private employees: PumpEmployeeService,
    private branches: BranchManagerService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.employees.get_pump_employees().subscribe((res) => {
      if (res.msg === 'Success') {
        this.employeesList = res.data;
      }
    });
    //this.branch listing api
    this.branches.get_branches().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.branchesList = res.data;
      }
    });
  }

  public onSubmit(): void {
    if (validateForm('emp_form')) {
      console.log(this.data);
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

  public onEdit(item: Employee): void {
    this.editMode = true;
    this.data = {
      email: item.user.email,
      name: item.name,
      phone: item.phone,
      id: item.id,
      username: item.username,
      branches: item.branches,
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
