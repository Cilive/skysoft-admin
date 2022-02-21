export interface PaymentOut {
  date: Date;
  qty: number;
  gross_amt: number;
  vat_amount: null;
  total_amt: number;
  vat_percenatge: null;
  invoice_no: number;
  payment_type: string;
  username: string;
  description: string;
  price: number;
  customer: string;
  um: string;
  branch: string | number;
  phone_no: number;
  updated_at: Date;

  net_amount_sum: number;
  gross_amt_sum: number;
  net_vat_sum: number;
}
