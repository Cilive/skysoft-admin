export interface Customerbalance {
  invoice_no: number;
  date: Date;
  contact: number;
  total_amt: number;
  payment_type: string;
  balance_amt: number;
  type: string;
  recieved: number;
  company: string;
  fuel: string;
  transaction_type: string;
  customer_name: string;
  customer_ar_name: string;
  phone_no: string;
  UOM: string;
  updated_at?: string | Date;
  lan: string;
  branches: string | number;
  id?: number;

  amount: number;
}
