export interface Credit {
  invoice_no: number;
  date: Date;
  //   total_amt?: number;
  balance_amt: number;
  updated_at: string | Date;
  //   paid?: number;
  //   company?: string;
  //   transaction_type?: string;
  Supplier: string;
  branches: string | number;
  phone_no: string;
  amount: number;
}
