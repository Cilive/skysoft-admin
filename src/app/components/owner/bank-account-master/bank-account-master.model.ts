export interface BankAccounts {
  id?: number;
  bank_name: string;
  acc_holder_name: string;
  acc_no: string;
  initial_balance: number;
  balance: number;
  branches: string | number;
  owner: string | number;
  is_default: boolean;
  is_active?: boolean;
  credit_balance?: number;
  debit_balance?: number;
}
