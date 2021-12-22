import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CompanyProfileService } from 'src/app/services/company-profile/company-profile.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { Company } from './company-profile.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss'],
})
export class CompanyProfileComponent implements OnInit {
  passError: boolean = false;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  companyForm: FormGroup;
  data: Company = {
    ar_district: '',
    ar_name: '',
    ar_place: '',
    // confirm_password: '',
    cr_no: null,
    email: '',
    en_district: '',
    en_name: '',
    en_place: '',
    lan_no: null,
    logo: '',
    phone: null,
    password: '',
    vat_no: null,
  };
  companies: Company[] = [];

  constructor(
    private modalService: BsModalService,
    private companyService: CompanyProfileService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    // this.prepareForm();
    this.companyService.get_company_proiles().subscribe((res) => {
      if (res.msg === 'Success') {
        this.companies = res.data;
      }
    });
  }

  public onSubmit(): void {
    if (validateForm('form')) {
      const formData = new FormData(
        document.getElementById('form') as HTMLFormElement
      );
      this.companyService.post_company_proile(formData).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Company Added Successfully');
          this.ngOnInit();
          this.onReset();
        }
        // this.onReset();
      });
    }
  }

  public onReset(): void {
    clearForm('form');
    this.editMode = false;
  }

  public selectFile(event: Event): void {
    // const targetInput = event.target as HTMLInputElement;
    // // if (targetInput.files.length > 0) {
    // //   const file = targetInput.files[0];
    // // }
  }

  public onEdit(item: Company): void {
    this.editMode = true;
    this.data = {
      id: item.id,
      ar_district: item.ar_district,
      ar_name: item.ar_name,
      ar_place: item.ar_place,
      cr_no: item.cr_no,
      email: item.account.email,
      en_district: item.en_district,
      en_name: item.en_name,
      en_place: item.en_place,
      lan_no: item.lan_no,
      logo: item.logo,
      phone: item.phone,
      vat_no: item.vat_no,
      account: item.account,
    };
  }
  public update() {
    if (validateForm('form')) {
      const formData = new FormData(
        document.getElementById('form') as HTMLFormElement
      );
      this.companyService
        .update_company_profile(formData, this.data.id)
        .subscribe((res) => {
          if (res.msg === 'Success') {
            this.toast.success('Company Updated Successfully');
            this.ngOnInit();
            this.onReset();
          }
          // this.onReset();
        });
    }
  }

  public onDelete(id) {
    this.companyService.delete_company_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Company Deletion Successfull');
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
    this.companyService.suspend_company_profile(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Company Added To Suspended List');
        this.ngOnInit();
      }
    });
  }
}
