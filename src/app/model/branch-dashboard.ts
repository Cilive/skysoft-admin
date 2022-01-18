export interface BranchDashboardInterface {
  msg: string;
  data: Data;
  en_name: string;
  total_transactions: OnlineSales;
  total_sale: OnlineSales;
  total_purchase: OnlineSales;
  online_sales: OnlineSales;
  total_expense: OnlineSales;
}

export interface Data {
  en_name: string;
  total_transactions: OnlineSales;
  total_sale: OnlineSales;
  total_purchase: OnlineSales;
  online_sales: OnlineSales;
  total_expense: OnlineSales;
}

export interface OnlineSales {
  total_amt__sum: number | null;
}
