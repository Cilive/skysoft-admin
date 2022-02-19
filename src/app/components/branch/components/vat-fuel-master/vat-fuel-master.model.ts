export interface FuelData {
  name: string;
  fuel_vat: number;
  id?: number;
  //   vat: number;
  rate?: number;
  payable_amt?: number;
  current_stock: number;
  company?: number;
}

export interface FuelRate {}
