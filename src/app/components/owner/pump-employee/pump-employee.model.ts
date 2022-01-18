export interface Employee {
  [x: string]: any;
  phone: string;
  password?: string;
  email: string;
  name: string;
  id?: number;
  username: string;
  branches: number;
  iqama_no: string;
  account?: {
    email: string;
  };
}
