export interface purchaseInvoice {
  // vat: number;
  customer_name?: string;
  invoice_no?: number;
  old_balance?: number;
  balance_amt?: number;
  date: number;
  qty: number;
  contact: number;
  fuel: number;
  payment_type: number;
  type: number;
  branches: number;
  bank_ac_id?: number;
  paid_amt: number;
  gross_amt: number;
  total_amt: number;
  id?: number;
  vat_amount: number;
  fuelvat_percentage: number;
  fuels?: number;
}
export interface Oldbalance {
  balance_amt_sum: number;
}
