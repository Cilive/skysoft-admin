export interface Employee {
  phone: string;
  password?: string;
  email: string;
  name: string;
  id?: number;
  account?: {
    email: string;
  };
}
