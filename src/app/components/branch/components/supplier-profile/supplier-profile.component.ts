import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { SupplierProfileService } from 'src/app/services/supplier-profile/supplier-profile.service';
import { SupplierProfile } from './supplier-profile.model';

@Component({
  selector: 'app-supplier-profile',
  templateUrl: './supplier-profile.component.html',
  styleUrls: ['./supplier-profile.component.scss'],
})
export class SupplierProfileComponent implements OnInit {
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  supplierForm: FormGroup;
  suppliers: SupplierProfile[] = [];

  data: SupplierProfile = {
    en_name: '',
    ar_name: '',
    en_place: '',
    ar_place: '',
    en_district: '',
    ar_district: '',
    vat_no: null,
    lan_no: null,
    mobile_no: null,
    type: 2,
  };
  body = {};
  id: number;
  customerlist: SupplierProfile[] = [];
  supplierProfile: any;

  constructor(
    private modalService: BsModalService,
    private toast: AlertService,
    private supplierService: SupplierProfileService
  ) {}

  ngOnInit(): void {
    this.prepareForm();
    this.supplierService.get_supplier_profiles().subscribe((res) => {
      this.suppliers = res.data;
    });
  }
  public onSubmit(): void {
    if (validateForm('form')) {
      console.log(this.data);
      this.supplierService.post_supplier_profile(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Supplier Added Successfully');
          this.ngOnInit();
        }
      });
    }
  }
  public onUpdate() {
    if (validateForm('form')) {
      this.supplierService
        .update_supplier_profile(this.data)
        .subscribe((res) => {
          if (res.msg === 'Success') {
            this.toast.success('Supplier Updated Successfully');
            this.ngOnInit();
          }
        });
    }
  }

  public onReset(): void {
    this.supplierForm.reset();
    // clearForm('form');
    this.editMode = false;
  }

  public selectFile(event): void {
    this.supplierForm.value['logo'] = event.target.files[0].name;
  }

  public onEdit(item: SupplierProfile): void {
    console.log(item);
    this.editMode = true;
    this.data = {
      en_name: item.en_name,
      ar_name: item.ar_name,
      en_place: item.en_place,
      ar_place: item.ar_place,
      en_district: item.en_district,
      ar_district: item.ar_district,
      vat_no: item.vat_no,
      lan_no: item.lan_no,
      mobile_no: item.mobile_no,
      id: item.id,
      type: item.type,
    };
  }

  public onDelete(id) {
    this.supplierService.delete_supplier_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef.hide();
        this.ngOnInit();
        this.toast.success('Supplier Deletion Successful');
      }
    });
  }
  public onSuspend(id) {
    this.supplierService.suspend_supplier_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Supplier Added to Suspended List');
      }
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  private prepareForm() {
    this.supplierForm = new FormGroup({
      en_name: new FormControl(null, [Validators.required]),
      ar_name: new FormControl(null, [Validators.required]),
      en_place: new FormControl(null, [Validators.required]),
      ar_place: new FormControl(null, [Validators.required]),
      en_district: new FormControl(null, [Validators.required]),
      ar_district: new FormControl(null, [Validators.required]),
      vat_no: new FormControl(null, [Validators.required]),
      lan_no: new FormControl(null, [Validators.required]),
      mobile_no: new FormControl(null, [Validators.required]),
      id: new FormControl(null),
    });
  }
}

//   logoData: FormData;
//   modalRef?: BsModalRef;
//   editMode: boolean;
//   supplierForm: FormGroup;
//   suppliers: SupplierProfile[] = [];
//   data: SupplierProfile = {
//     en_name: '',
//     ar_name: '',
//     en_place: '',
//     ar_place: '',
//     en_district: '',
//     ar_district: '',
//     vat_no: 0,
//     lan_no: 0,
//     mobile_no: 0,
//     type: 2,
//   };

//   constructor(
//     private modalService: BsModalService,
//     private supplierService: SupplierProfileService,
//     private toast: AlertService
//   ) {}

//   ngOnInit(): void {
//     // this.prepareForm();
//     this.supplierService.get_supplier_profiles().subscribe((res) => {
//       this.suppliers = res.data;
//     });
//   }
//   public onSubmit(): void {
//     if (validateForm('form')) {
//       // console.log(this.data);
//       this.supplierService.post_supplier_profile(this.data).subscribe((res) => {
//         if (res.msg === 'Success') {
//           this.toast.success('Supplier Added Successfully');
//           this.ngOnInit();
//         }
//       });
//     }
//   }
//   public onUpdate() {
//     if (validateForm('form')) {
//       this.supplierService
//         .update_supplier_profile(this.data)
//         .subscribe((res) => {
//           if (res.msg === 'Success') {
//             this.toast.success('Supplier Updated Successfully');
//             this.ngOnInit();
//           }
//         });
//     }
//   }

//   public onReset(): void {
//     this.supplierForm.reset();
//     // clearForm('form');
//     this.editMode = false;
//   }

//   public selectFile(event): void {
//     this.supplierForm.value['logo'] = event.target.files[0].name;
//   }

//   public onEdit(item: SupplierProfile): void {
//     this.editMode = true;
//     this.supplierForm.setValue(item);
//     this.data = {
//       en_name: item.en_name,
//       ar_name: item.ar_name,
//       en_place: item.en_place,
//       ar_place: item.ar_place,
//       en_district: item.en_district,
//       ar_district: item.ar_district,
//       vat_no: item.vat_no,
//       lan_no: item.lan_no,
//       mobile_no: item.mobile_no,
//       type: item.type,
//     };
//   }

//   public onDelete(id) {
//     this.supplierService.delete_supplier_profile(id).subscribe((res) => {
//       if (res.msg === 'Success') {
//         this.modalRef.hide();
//         this.ngOnInit();
//         this.toast.success('Supplier Deletion Successful');
//       }
//     });
//   }
//   public onSuspend(id) {
//     this.supplierService.suspend_supplier_profile(id).subscribe((res) => {
//       if (res.msg === 'Success') {
//         this.toast.success('Supplier Added to Suspended List');
//       }
//     });
//   }

//   openModal(template: TemplateRef<any>) {
//     this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
//   }

//   decline(): void {
//     this.modalRef?.hide();
//   }
// }
