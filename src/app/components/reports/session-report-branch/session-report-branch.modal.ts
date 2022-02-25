export interface SessionReportBranch {
  id?: number;
  opening_balance_bank: number;
  cash_opening_balance: number;
  closing_balance_bank: null;
  closing_balance_cash: null;
  total_transactions: null;
  //    total_sales?: null;
  //    total_purchase?: null;
  //    total_expense?: null;
  //    total_cash_sales?: null;
  //    total_cash_purchase?: null;
  //    total_bank_purchase?: null;
  //    total_bank_sales?: null;
  to_date: Date;
  //    created_at?: Date;
  from_date: Date;
  date: string | Date;
  status?: boolean;
  branch_name: string;
  //    company?: number;
  //    bank?: number;
}
