// import { Component, OnInit, TemplateRef } from '@angular/core';
// import { FormGroup } from '@angular/forms';
// import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
// import { AlertService } from 'src/app/services/alert/alert.service';
// import { BranchManagerService } from '../../services/branch-manager/branch-manager.service';
// import {
//   clearForm,
//   validateForm,
// } from 'src/app/services/general/general.service';
// import { Branchmanager } from './branch-manager.model';

// @Component({
//   selector: 'app-branch-manager',
//   templateUrl: './branch-manager.component.html',
//   styleUrls: ['./branch-manager.component.scss'],
// })
// export class BranchManagerComponent implements OnInit {
//   passError: boolean = false;
//   logoData: FormData;
//   modalRef?: BsModalRef;
//   editMode: boolean;
//   PumpEmployeeForm: FormGroup;
//   data: Branchmanager = {
//     email: '',
//     name: '',
//     password: '',
//     phone: '',
//     username: '',
//     iqama_no: '',
//     branches: 1,
//   };
//   employeesList: Branchmanager[] = [];
//   Branch_ManagerList: Branchmanager[];

//   constructor(
//     private modalService: BsModalService,
//     private toast: AlertService,
//     private Branchmanager: BranchManagerService
//   ) {}

//   ngOnInit(): void {
//     // this.prepareForm();
//     this.Branchmanager.get_branch_manager().subscribe((res) => {
//       if (res.msg === 'Success') {
//         this.Branch_ManagerList = res.data;
//       }
//     });
//   }

//   public onSubmit(): void {
//     if (validateForm('emp_form')) {
//       this.Branchmanager.post_branch_manager(this.data).subscribe((res) => {
//         if (res.msg === 'Success') {
//           this.toast.success(' branchmanagerAdded Successfully');
//           this.ngOnInit();
//           this.onReset();
//         }
//         // this.onReset();
//       });
//     }
//   }

//   public onReset(): void {
//     clearForm('emp_form');
//     this.editMode = false;
//   }

//   public selectFile(event: Event): void {
//     // const targetInput = event.target as HTMLInputElement;
//     // // if (targetInput.files.length > 0) {
//     // //   const file = targetInput.files[0];
//     // // }
//   }

//   public onEdit(item: Branchmanager): void {
//     this.editMode = true;
//     this.data = {
//       username: item.username,
//       password: item.password,
//       iqama_no: item.iqama_no,
//       email: item.email,
//       name: item.name,
//       phone: item.phone,
//       id: item.id,
//       branches: item.branches,
//     };
//   }
//   public onUpdate() {
//     if (validateForm('emp_form')) {
//       this.Branchmanager.update_branch_manager(
//         this.data,
//         this.data.id
//       ).subscribe((res) => {
//         if (res.msg === 'Success') {
//           this.toast.success('Employee Updated Successfully');
//           this.ngOnInit();
//           this.onReset();
//         }
//       });
//     }
//   }

//   public onDelete(id) {
//     this.Branchmanager.delete_branch_manager(id).subscribe((res) => {
//       if (res.msg === 'Success') {
//         this.toast.success('Employee Deletion Successfull');
//         this.ngOnInit();
//       }
//     });
//     this.modalRef.hide();
//   }

//   openModal(template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
//   }

//   decline(): void {
//     this.modalRef?.hide();
//   }
//   suspend(id): void {
//     this.Branchmanager.suspend_branch_manager(id).subscribe((res) => {
//       if (res.msg === 'Success') {
//         this.toast.success(' Employee Added To Suspended List');
//         this.ngOnInit();
//       }
//     });
//   }
// }
