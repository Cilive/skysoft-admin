export interface FuelData {
  name: string;
  fuel_vat: number;
  id?: number;
  //   vat: number;
  rate?: number;
  payable_amt?: number;
  company?: number;
}

export interface Fuelmaster {
  payable_amt?: any;
  name: string;
  fuel_vat: number;
  rate: number;
  branches: string | number;
  current_stock: number;
  id?: number;
}
