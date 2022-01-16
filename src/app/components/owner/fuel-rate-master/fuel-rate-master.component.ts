import { Component, OnInit } from '@angular/core';
import { AlertService } from 'src/app/services/alert/alert.service';
import { FueldataService } from 'src/app/services/fueldata/fueldata.service';
import { validateForm } from 'src/app/services/general/general.service';
import { FuelData } from '../vat-fuel-master/vat-fuel-master.model';

@Component({
  selector: 'app-fuel-rate-master',
  templateUrl: './fuel-rate-master.component.html',
  styleUrls: ['./fuel-rate-master.component.scss'],
})
export class FuelRateMasterComponent implements OnInit {
  fuelsList: FuelData[] = [];
  commonVat: number = null;
  fuelAmount;
  including;
  // fuel: number;
  vat: number;
  constructor(private fuels: FueldataService, private toast: AlertService) {}

  ngOnInit(): void {
    this.fuels.get_fuelDetails().subscribe((res) => {
      this.fuelsList = res.data.map((t) => {
        t.payable_amt = t.payable_amt ?? null;
        t.rate = t.rate ?? null;
        return t;
      });
      this.fuelsList = res.data;
    });
    this.fuels.get_vat().subscribe((res) => {
      this.commonVat = res.data.vat;
    });
  }
  onChangeFuelAmount(item: FuelData, index) {
    /**
     * Specific VAT
     */
    const spec_vat_rate = item.rate + (item.rate * item.fuel_vat) / 100;
    this.fuelsList[index].payable_amt =
      spec_vat_rate + (spec_vat_rate * this.commonVat) / 100;
  }
  onSubmit() {
    if (validateForm('fuelRate')) {
      this.fuels.updateFualRate(this.fuelsList).subscribe((res) => {
        // if (res.msg === 'Success') {
        this.toast.success('Successfully Saved');
        // }
      });
    }
  }
}
