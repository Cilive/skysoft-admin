export interface Purchasedetiles {
  invoice_no: number;
  date: Date;
  qty: number;
  total_amt: number;
  vat_percenatge: number;
  vat_amount: number;
  gross_amt: number;
  invoice_type: string;
  company: string;
  Description: string;
  suppier_name: string;
  price: number;
  branches: string | number;
  Unit: string;
  net_amount_sum: number;
  gross_amt_sum: number;
  net_vat_sum: number;
  updated_at?: string | Date;
}
