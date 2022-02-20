import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertService } from 'src/app/services/alert/alert.service';
import { FueldataService } from 'src/app/services/fueldata/fueldata.service';
import {
  clearForm,
  validateForm,
} from 'src/app/services/general/general.service';
import { FuelstockService } from 'src/app/services/services/fuelstock/fuelstock.service';
import { FuelStocks } from './fuelstock.mpdal';
import { FuelData } from '../vat-fuel-master/vat-fuel-master.model';
import { Branchmanager } from '../branch-manager/branch-manager.model';
import { BranchManagerService } from 'src/app/services/branch-manager/branch-manager.service';

@Component({
  selector: 'app-fulestock',
  templateUrl: './fulestock.component.html',
  styleUrls: ['./fulestock.component.scss'],
})
export class FulestockComponent implements OnInit {
  modalRef?: BsModalRef;
  fuelstockes = [];
  data: FuelStocks = {
    qty: 0,
    Fuel: 0,
    // branches: '',
  };
  editMode = false;
  // fuelList = ([] = []);
  fuelList: FuelData[] = [];
  // branchesList: Branchmanager;

  constructor(
    private modalService: BsModalService,
    private fuelstock: FuelstockService,
    private fuel: FueldataService,
    private branches: BranchManagerService,
    private toast: AlertService
  ) {}

  ngOnInit(): void {
    this.fuelstock.get_fuelstock().subscribe((res) => {
      this.fuelstockes = res.data;
    });

    this.fuel.get_fuelDetails().subscribe((res) => {
      if (res.msg === 'Success') {
        console.log(res.data);

        this.fuelList = res.data;
      }
    });
    // this.branches.get_branches().subscribe((res) => {
    //   if (res.msg === 'Success') {
    //     console.log(res.data);

    // this.branchesList = res.data;

    //   });
    // }
  }
  onReset() {
    clearForm('bnkForm');
  }
  onSubmit() {
    if (validateForm('bnkForm')) {
      this.fuelstock.post_fuelstock(this.data).subscribe((res) => {
        if (res.msg === 'Success') {
          this.toast.success('Dispense Added');
          clearForm('bnkForm');
          this.ngOnInit();
        }
      });
    }
  }
  onUpdate() {
    this.fuelstock.update_fuelstock(this.data, this.data).subscribe((res) => {
      if (res.msg === 'Success') {
        this.toast.success('Dispense Updated');
        clearForm('bnkForm');
        this.ngOnInit();
      }
    });
  }
  onEdit(item) {
    this.editMode = true;
    this.data = {
      qty: item.qty,
      Fuel: item.Fuel,
      // branches: item.branches,
    };
  }
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: 'modal-sm' });
  }

  decline(): void {}
  onDelete(id) {
    this.fuelstock.delete_fuelstock(id).subscribe((res) => {
      if (res.msg === 'Success') {
        this.modalRef?.hide();
        this.ngOnInit();
        this.toast.success('Dispense Deleted');
      }
    });
  }
}
