export interface ExpensedetailesBranch {
  date: Date;
  gross_amt: number;
  paid_amt: number;
  total_amt: number;
  invoice_no: number;
  exp_type: string;
  ref_no: string;
  payment_type: string;
  username: string;
  customer: string;
  //   branches: string | number;
  net_amount_sum: number;
  gross_amt_sum: number;
  updated_at?: string | Date;
}
