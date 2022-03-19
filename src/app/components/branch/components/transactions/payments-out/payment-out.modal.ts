export interface DebtorsBranch {
  invoice_no: string;
  date: string | Date;
  contact: number;
  // total_amt: number;
  payment_type: string;
  balance_amt: number;
  type: string;
  recieved: number;
  company: string;
  fuel: string;
  transaction_type: string;
  customer_name: string;
  UOM: string;
  branches: string | number;
  updated_at?: string | Date;
  id?: number;
  phone_no: string;
  amount: string;
}
