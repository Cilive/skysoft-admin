import { Component, OnInit } from '@angular/core';
import { FuelStocks } from './fuelstocks.modal';

@Component({
  selector: 'app-fuelstocks',
  templateUrl: './fuelstocks.component.html',
  styleUrls: ['./fuelstocks.component.scss'],
})
export class FuelstocksComponent implements OnInit {
  data: FuelStocks = {
    qty: 0,
    Fuel: 0,
  };
  constructor() {}

  ngOnInit(): void {}
}
