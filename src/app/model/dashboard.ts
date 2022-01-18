export interface OwnerDashboardInterface {
  en_name: string;
  total_transactions: OnlineSales;
  total_sale: OnlineSales;
  total_purchase: OnlineSales;
  online_sales: OnlineSales;
  total_expense: OnlineSales;
  Stock: Stock;
}

export interface Stock {
  qty: number;
  Fuel: string;
  company: string;
  branches: string;
}

export interface OnlineSales {
  total_amt__sum: number | null;
}
