export interface PaymentDue {
  invoice_no: number;
  date: Date;
  contact_en_name: string;
  total_amt: number;
  payment_type: string;
  balance_amt: number;
  type: string;
  recieved: number;
  company: string;
  fuel: string;
  transaction_type: string;
  //   customer_name: string;
  customer_ar_name: string;
  phone_no: string;
  UOM: string;
  branches: string | number;
  invoice_type: string | number;
  id?: number;

  updated_at?: string | Date;

  amount: number;
}
