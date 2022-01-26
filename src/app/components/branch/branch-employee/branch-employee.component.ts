import { Component, OnInit, TemplateRef } from '@angular/core';
import { BranchEmployeeInterface } from 'src/app/model/branch-employee';
import { BranchEmployeeService } from 'src/app/services/branch-employee/branch-employee.service';

import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';

@Component({
  selector: 'app-branch-employee',
  templateUrl: './branch-employee.component.html',
  styleUrls: ['./branch-employee.component.scss'],
})
export class BranchEmployeeComponent implements OnInit {
  employee = [];
  toast: any;
  editMode: boolean;
  modalRef: any;
  modalService: any;
  constructor(private branchEmployee: BranchEmployeeService) {}

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
  data: BranchEmployeeInterface = {
    email: '',
    iqama_no: '',
    name: '',
    password: '',
    phone: '',
    username: '',
  };
  public onReset(): void {
    clearForm('emp_form');
    this.editMode = false;
  }

  public selectFile(event: Event): void {}

  public onEdit(item): void {
    // this.editMode = true;
    // this.data = {
    //   email: item.email,
    //   name: item.name,
    //   phone: item.phone,
    //   id: item.id,
    //   iqama: item.iqama,
    // };
  }
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
