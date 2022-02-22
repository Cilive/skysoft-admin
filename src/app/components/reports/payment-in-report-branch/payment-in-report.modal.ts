export interface PaymentInBranch {
  invoice_no: string;
  date: Date;
  qty: number;
  total_amt: number;
  vat_percenatge: null;
  vat_amount: null;
  gross_amt: number;
  invoice_type: string;
  company: string;
  Description: string;
  supplier_name: string;
  price: number;
  branch_name: string;
  Unit: string;
  phone_no: number;

  updated_at: Date;

  net_amount_sum: number;
  gross_amt_sum: number;
  net_vat_sum: number;
}
