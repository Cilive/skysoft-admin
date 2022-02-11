export interface Session {
  id?: number;
  opening_balance_bank: number;
  cash_opening_balance: number;
  closing_balance_bank: number;
  closing_balance_cash: number;
  total_transactions: number;
  total_sales: number;
  total_purchase: number;
  total_expense: number;
  total_cash_sales: number;
  total_cash_purchase: number;
  total_bank_purchase: number;
  total_bank_sales: number;
  date: Date;
  created_at: Date;
  updated_at: Date;
  status: boolean;
  branches: string | number;
  company: number;
  bank: number;
}
