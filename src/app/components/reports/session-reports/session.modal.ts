export interface SessionReportsOwner {
  date: string | Date;
  from_date: string | Date;
  to_date: string| Date;
  branch: string;

  id:number;
  opening_balance_bank: number;
  cash_opening_balance: number;
  closing_balance_bank: number;
  closing_balance_cash: number;
  total_transactions:   null;
  branch_name: string;


}
