export interface BankAccounts {
  id?: number;
  bank_name: string;
  acc_holder_name: string;
  acc_no: string | number;
  initial_balance: number;
  balance: number;
  is_default: boolean | number;
  is_active?: boolean | number;
}
