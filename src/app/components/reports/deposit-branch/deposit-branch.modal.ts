export interface DepositAmountBranch {
  id?: number;
  //   amount: number;
  date: Date;
  //   branch: string | number;
  company: number;
  bank: number;
  owner: string;
  ac_holder_name: string;
  ac_number: string;
  updated_at?: string | Date;

  amount: number;
}
