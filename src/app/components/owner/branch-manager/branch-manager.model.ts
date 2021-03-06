export interface Branchmanager {
  id?: any;
  username: string;
  password: string;
  branches: string | number;
  email: string;
  name: string;
  iqama_no: string;
  phone: string;
  // user?: string;

  en_name?: string;
  ar_name?: string;
  en_place?: string;
  ar_place?: string;
  en_district?: string;
  ar_district?: string;
  cr_no?: string;
  vat_no?: string;
  lan_no?: string;
  logo?: null;
  status?: boolean;
  company?: number;
  value?: any;
  supplierProfile?: string;

  is_superuser: boolean;
  is_company: boolean;
  is_active: boolean;
  is_employee: boolean;
  is_branch_user: boolean;
  is_staff: boolean;
  is_admin: boolean;
  is_super_admin: boolean;
  created_at: Date;
  updated_at: Date;
  date_joined: Date;
  last_login: Date;
  groups: any[];
  user_permissions: any[];
  user?: {
    email: string;
  };
}
