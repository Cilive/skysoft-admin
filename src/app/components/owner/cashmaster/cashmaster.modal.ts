export interface Cashmaster {
  id?: number;
  branches: string | number;
  opening_balance: number;
  balance: number;
  owner: string | number;
  cash_ac_name: string;
}
