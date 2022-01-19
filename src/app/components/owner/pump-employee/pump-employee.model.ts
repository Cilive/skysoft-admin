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
  user?: {
    email: string;
  };
}
export interface Branch {
  id: number;
  en_name: string;
  ar_name: string;
  en_place: string;
  ar_place: string;
  en_district: string;
  ar_district: string;
  cr_no: string;
  vat_no: string;
  lan_no: string;
  logo: null;
  status: boolean;
  phone: string;
  company: number;
}
