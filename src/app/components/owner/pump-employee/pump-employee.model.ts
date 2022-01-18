export interface Employee {
  phone: string;
  password?: string;
  email: string;
  name: string;
  id?: number;
  iqama: string;
  account?: {
    email: string;
  };
}
