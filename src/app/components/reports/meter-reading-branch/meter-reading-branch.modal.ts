export interface MeterreadingBranch {
  date: Date;
  //   branches: number;
  updated_at?: string | Date;
  gross_amt_sum: number;
  start_reading: number;
  end_reading: number;
  payable_amt: number;
  fuel: string;
  fuel_stock: null;
  dispencer: string;
  UOM: string;
  //   branch: string;
  employee_name: string;

  payable_amount_sum: number;
}
