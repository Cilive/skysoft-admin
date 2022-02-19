export interface BranchExpense {
  //   payment_type: number;
  //   qty: number;
  //   type: number;
  //   exp_type: string;
  //   ref_no: string;
  //   paid_amt: number;
  //   gross_amt: number;
  //   total_amt: number;
  // }
  payment_type: number;
  qty: number;
  date: Date;
  type: number;
  //   branches: number;
  exp_type: string;
  ref_no: string;
  paid_amt: number;
  bank_ac_id: number;
  gross_amt: number;
  total_amt: number;
  id?: number;
  amount: string;
  //   expense_name: number;
  //   customer_name: string;
  //   payable_amt: string;
  invoice_no?: string;
}
