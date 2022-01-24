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
import { FuelRate } from './vat-fuel-master.model';

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
  FuelEditMode: boolean = false;
  fuelmaster: FuelRate[] = [];
  customerForm: FormGroup;
  // commonVat: { vat: number; id: number } = {
  //   vat: null,
  //   id: undefined,
  // };
  data: FuelRate = {
    name: '',
    fuel_vat: null,
    rate: null,
    current_stock: null,
    branches: '',
  };
  // counts = [];
  // total: number = 0;

  tableData: FuelRate[] = [];
  // editMode = false;
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
    this.vatAndFuel.get_fuelDetails().subscribe((res) => {
      if (res.msg === 'Success') {
        this.tableData = res.data;
        this.vatEditMode = true;
      }
    });
  }

  // public onSubmitFuel(): void {
  //   console.log(this.data);
  //   this.vatAndFuel.post_fuelDetail(this.fuelData).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       this.toast.success('Fuel Added');
  //       this.ngOnInit();
  //     }
  //   });
  // }
  public onSubmit(): void {
    if (validateForm('fuelform')) {
      this.vatAndFuel.post_fuelmaster(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('fuel added successfully');
          clearForm('fuelform');
          this.onReset();

          this.ngOnInit();
        }
      });
    }
  }
  public onReset(): void {
    clearForm('fuelform');
    this.vatEditMode = true;
  }
  // fuelData(fuelData: any) {
  //   throw new Error('Method not implemented.');
  // }
  // public onSubmitVat(): void {
  //   this.vatAndFuel.post_vat({ ...this.commonVat }).subscribe((res) => {
  //     if (res.msg === 'Success') {
  //       this.ngOnInit();
  //       this.toast.success('Vat Added');
  //     }
  //   });
  // }
  // public onUpdateVat(): void {
  //   this.vatAndFuel
  //     .update_vat(this.commonVat, this.commonVat.id)
  //     .subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.ngOnInit();
  //         this.toast.success('Vat Updated');
  //       }
  //     });
  // }
  //  onUpdateFuel(): void {
  //   this.vatAndFuel
  //     .update_fuelDetail(this.fuelData[0], this.fuelData[0].id)
  //     .subscribe((res) => {
  //       if (res.msg === 'Success') {
  //         this.ngOnInit();
  //         this.onReset();
  //         this.toast.success('Fuel Details Updated');
  //       }
  //     });
  // }

  // public onReset(): void {
  //   this.FuelEditMode = false;
  // }

  onEdit(item: FuelRate): void {
    this.FuelEditMode = true;
    console.log(item);
    // this.fuelmaster = [{ renderId: this.fuelmaster.length + 1, ...item }];
    this.data = {
      name: item.name,
      fuel_vat: item.fuel_vat,
      rate: item.rate,
      current_stock: item.current_stock,
      id: item.id,
      branches: item.branches,
      // vat: item.vat,
    };
  }
  onUpdate() {
    this.vatAndFuel
      .update_fuelDetail(this.data, this.data.id)
      .subscribe((res: { msg: string }) => {
        if (res.msg === 'Success') {
          this.toast.success('fuel  updated successfully');
          clearForm('fuelForm');
          this.ngOnInit();
        }
      });
  }
  onDeleteFuel(id: any) {
    this.vatAndFuel.delete_fuelDetail(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Fuel Deleted Successfull');
        this.ngOnInit();
      }
    });
    this.modalRef.hide();
  }

  // removeInputs(i) {
  //   this.fuelmaster.splice(i, 1);
  // }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {
    this.modalRef?.hide();
  }

  onsuspend(id: any): void {
    this.vatAndFuel.suspend_vatAndFuel(id).subscribe((res: { msg: string }) => {
      if (res.msg === 'Success') {
        this.toast.success(' fuel Added To Suspended List');
        this.ngOnInit();
      }
    });
  }
}
