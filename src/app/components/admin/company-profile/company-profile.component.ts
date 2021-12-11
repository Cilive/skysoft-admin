import { AfterViewInit, Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { CompanyProfileService } from 'src/app/services/company-profile/company-profile.service';
import { clearForm, validateForm } from 'src/app/services/general/general.service';
import { CompanyProfile } from './company-profile.model';

@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.scss']
})
export class CompanyProfileComponent implements OnInit, AfterViewInit {
  passError: boolean;
  logoData: FormData;
  modalRef?: BsModalRef;
  editMode: boolean;
  companyForm: FormGroup;
  companies: CompanyProfile[] = [{
    en_name: 'First',
    ar_name: 'second',
    en_place: 'kerala',
    ar_place: 'india',
    en_district: 'malappuram',
    ar_district: 'kochi',
    cr_no: 1,
    vat_no: 2,
    lan_no: 3,
    mobile_no: 4,
    logo: 'sdfs',
    email: 'admin@gmail.com',
    password: 'admin',
    confirm_password: 'admin',
  }, {
    en_name: 'Second',
    ar_name: 'first',
    en_place: 'india',
    ar_place: 'kerala',
    en_district: 'malappuram',
    ar_district: 'kochi',
    cr_no: 12,
    vat_no: 2213,
    lan_no: 12123,
    mobile_no: 124,
    logo: 'sdfs',
    email: 'test@gmail.com',
    password: 'test',
    confirm_password: 'test',
  }]

  constructor(private modalService: BsModalService,
    private companyService: CompanyProfileService) { }

  ngOnInit(): void {
    this.prepareForm();
    this.companyService.get_company_proiles().subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewInit(): void {
    this.companyForm.get('confirm_password').valueChanges.subscribe(value => {
      this.checkPassword(value);
    });
  }

  public onSubmit(): void {
    this.checkPassword(this.companyForm.value['confirm_password']);
    if (validateForm('form') && this.passError) {
      this.companyService.post_company_proile(this.companyForm.value).subscribe(res => {
        console.log(res)
        // this.onReset();
      });
    }
  }

  public onReset(): void {
    this.companyForm.reset();
    clearForm('form');
    this.editMode = false;
  }

  public selectFile(event): void {
    this.companyForm.value['logo'] = event.target.files[0].name;
  }

  public onEdit(item: CompanyProfile): void {
    this.editMode = true;
    this.companyForm.setValue(item);
  }

  public onDelete(id) {
    this.companies.splice(id, 1)
    this.modalRef.hide();
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  private checkPassword(value: string) {
    if (this.companyForm.value['password'] === value) {
      this.passError = false;
    } else {
      this.passError = true;
    }
  }

  private prepareForm() {
    this.companyForm = new FormGroup({
      'en_name': new FormControl(null, [Validators.required]),
      'ar_name': new FormControl(null, [Validators.required]),
      'en_place': new FormControl(null, [Validators.required]),
      'ar_place': new FormControl(null, [Validators.required]),
      'en_district': new FormControl(null, [Validators.required]),
      'ar_district': new FormControl(null, [Validators.required]),
      'cr_no': new FormControl(null, [Validators.required]),
      'vat_no': new FormControl(null, [Validators.required]),
      'lan_no': new FormControl(null, [Validators.required]),
      'mobile_no': new FormControl(null, [Validators.required]),
      'logo': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required]),
      'confirm_password': new FormControl(null, [Validators.required]),
    });
  }

}
