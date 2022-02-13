export interface Invoices {
  invoice_no?: number;
  customer_name?: string;
  balance_amt: number;
  // vat: number;
  old_balance?: number;
  date: number;
  qty: number;
  contact: string;
  fuel: number;
  payment_type: number;
  type: number;
  bank_ac_id?: number;
  paid_amt: number;
  gross_amt: number;
  total_amt: number;
  id?: number;
  vat_amount: number;
  fuelvat_percentage: number;
  fuels?: number;
  is_default?: boolean;
  bank?: string;
  cash?: string;
}
export interface Oldbalances {
  balance_amt_sum: number;
}
export interface BranchSaleInvoicess {
  id?: number;
  invoice_no: number;
  total_amt: number;
  balance_amt: number;
  customer_name: string;
}
