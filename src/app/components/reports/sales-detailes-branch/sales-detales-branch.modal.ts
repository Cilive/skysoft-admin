export interface SalesdetailesBranch {
  date: Date;
  qty: number;
  gross_amt: number;
  vat_amount: number;
  total_amt: number;
  vat_percenatge: number;
  invoice_no: number;
  payment_type: string;
  username: string;
  description: string;
  price: number;
  customer: string;
  um: string;
  branches: string | number;
  id?: number;
  updated_at?: string | Date;
  item: string;
  amount: string;

  net_amount_sum: number;
  gross_amt_sum: number;
  net_vat_sum: number;
  customer_name: string;

  //   contact: number;
  //   // total_amt: number;
  //   balance_amt: number;
  //   type: string;
  //   recieved: number;
  //   company: string;
  //   fuel: string;
  //   transaction_type: string;
  //   customer_name: string;
  //   UOM: string;
  //   branches: string | number;
  //   updated_at?: string | Date;
  //   id?: number;
  //   phone_no: string;
  //   amount: string
}
