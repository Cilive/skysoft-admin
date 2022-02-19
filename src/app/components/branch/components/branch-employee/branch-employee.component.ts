import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { BranchEmployeeService } from 'src/app/services/branch-employee/branch-employee.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Employee } from './branch-employee.modal';

@Component({
  selector: 'app-bank-account-master',
  templateUrl: './branch-employee.component.html',
  styleUrls: ['./branch-employee.component.scss'],
})
export class BranchEmployeeComponent implements OnInit {
  employee = [];
  modalRef?: BsModalRef;
  Branchemployee: BranchEmployeeComponent[] = [];

  constructor(
    private branchEmployee: BranchEmployeeService,
    private modalService: BsModalService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    this.branchEmployee.get_branch_employees().subscribe((res) => {
      if (res.msg === 'Success') {
        this.employee = res.data;
      }
    });
  }
  public onSubmit(): void {
    if (validateForm('emp_form')) {
      this.branchEmployee
        .post_branch_employee(this.data)
        .subscribe((res: { msg: string }) => {
          if (res.msg === 'Success') {
            this.toast.success('Employee Added Successfully');
            this.ngOnInit();
            this.onReset();
          }
          // this.onReset();
        });
    }
  }
  data: Employee = {
    email: '',
    iqama_no: '',
    name: '',
    password: '',
    phone: '',
    username: '',
  };
  editMode = false;
  public onReset(): void {
    clearForm('emp_form');
    this.editMode = false;
  }

  public selectFile(event: Event): void {}

  // public onEdit(item): void {
  //   this.editMode = true;
  //   this.data = {
  //     email: item.email,
  //     name: item.name,
  //     phone: item.phone,
  //     id: item.id,
  //     iqama: item.iqama,
  //   };
  // }
  public onUpdate() {
    if (validateForm('emp_form')) {
      this.branchEmployee.update_branch_employee(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Employee Updated Successfully');
          this.ngOnInit();
          this.onReset();
        }
      });
    }
  }
  onEdit(item: Employee) {
    this.editMode = true;
    this.data = {
      email: item.email,
      iqama_no: item.iqama_no,
      name: item.name,
      password: item.password,
      phone: item.phone,
      username: item.username,
    };
  }

  public onDelete(id) {
    this.branchEmployee
      .delete_branch_employee(id)
      .subscribe((res: { msg: string }) => {
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
  //  .suspend_pump_employee(id)
  //       . suspend(id: any): void {
  //     this.employees
  //       subscribe((res: { msg: string }) => {
  //         if (res.msg === 'Success') {
  //           this.toast.success(' Employee Added To Suspended List');
  //           this.ngOnInit();
  //         }
  //       });
  //   }
}
