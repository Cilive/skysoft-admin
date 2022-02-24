export interface AccountsReportOwner {
  id: number;
  balance: number;
  debit_balance: number;
  credit_balance: number;
  bank: null;
  total_transactions: number;
  total_sales: number;
  total_purchase: number;
  total_expense: number;
  bank_ac_holder_name: string;
  account_no: string;
  cash_ac_name: string;
  session_id: number;
}
