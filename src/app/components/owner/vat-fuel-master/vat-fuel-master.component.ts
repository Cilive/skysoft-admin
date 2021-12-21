import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { FueldataService } from 'src/app/services/fueldata/fueldata.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { StoreService } from 'src/app/services/store/store.service';
import { FuelData } from './vat-fuel-master.model';

@Component({
  selector: 'app-vat-fuel-master',
  templateUrl: './vat-fuel-master.component.html',
  styleUrls: ['./vat-fuel-master.component.scss'],
})
export class VatFuelMasterComponent implements OnInit {
  passError: boolean;
  logoData: FormData;
  modalRef?: BsModalRef;
  vatEditMode: boolean;
  FuelEditMode: boolean;
  customerForm: FormGroup;
  commonVat: { vat: number; id: number } = {
    vat: null,
    id: undefined,
  };
  counts = [];
  total: number = 0;
  fuelData: ({ renderId: number } & FuelData)[] = [
    {
      renderId: 0,
      fuel_vat: null,
      name: '',
      company: parseInt(new StoreService().retrieve('id')),
    },
  ];
  tableData: FuelData[] = [];
  constructor(
    private vatAndFuel: FueldataService,
    private toast: AlertService,
    private modalService: BsModalService
  ) {
    console.log(new StoreService().retrieve('id'));
  }

  ngOnInit(): void {
    this.vatAndFuel.get_fuelDetails().subscribe((res) => {
      this.tableData = res.data;
    });
    this.vatAndFuel.get_vat().subscribe((res) => {
      if (res.msg === 'Success') {
        this.commonVat = res.data;
        this.vatEditMode = true;
      }
    });
  }

  public onSubmitFuel(): void {
    this.vatAndFuel.post_fuelDetail(this.fuelData).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Fuel Added');
        this.ngOnInit();
      }
    });
  }
  public onSubmitVat(): void {
    this.vatAndFuel.post_vat({ ...this.commonVat }).subscribe((res) => {
      if (res.msg === 'Success') {
        this.ngOnInit();
        this.toast.success('Vat Added');
      }
    });
  }
  public onUpdateVat(): void {
    this.vatAndFuel
      .update_vat(this.commonVat, this.commonVat.id)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          this.ngOnInit();
          this.toast.success('Vat Updated');
        }
      });
  }
  public onUpdateFuel(): void {
    this.vatAndFuel
      .update_fuelDetail(this.fuelData[0], this.fuelData[0].id)
      .subscribe((res) => {
        if (res.msg === 'Success') {
          this.ngOnInit();
          this.onReset();
          this.toast.success('Fuel Details Updated');
        }
      });
  }
  public onReset(): void {
    this.FuelEditMode = false;
  }

  addInputs() {
    console.log(['dd']);
    this.fuelData.push({
      renderId: this.fuelData.length + 1,
      fuel_vat: null,
      name: '',
      company: parseInt(new StoreService().retrieve('id')),
    });
  }
  onEdit(item) {
    this.FuelEditMode = true;
    this.fuelData = [{ renderId: this.fuelData.length + 1, ...item }];
  }

  removeInputs(i) {
    this.fuelData.splice(i, 1);
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }
  onDeleteFuel(id) {
    this.vatAndFuel.delete_fuelDetail(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Fuel Deleted');
        this.ngOnInit();
      }
    });
  }
  decline(): void {
    this.modalRef?.hide();
  }
}
