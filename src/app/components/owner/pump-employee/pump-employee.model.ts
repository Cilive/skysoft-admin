export interface Employee {
  [x: string]: any;
  phone: string;
  password?: string;
  email: string;
  name: string;
  id?: number;
  username: string;
  branches: string | number;
  iqama_no: string;
  user?: {
    email: string;
  };
}
