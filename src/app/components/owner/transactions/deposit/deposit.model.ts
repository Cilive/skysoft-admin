export interface Deposit {
  amount: string;
  date: Date;
  owner: string;
  id?: number;
  branches: string | number;
  bank_ac_id: number;
}
