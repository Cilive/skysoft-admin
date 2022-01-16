export interface Company {
  id?: number;
  en_name: string;
  ar_name: string;
  en_place: string;
  ar_place: string;
  en_district: string;
  ar_district: string;
  cr_no: string;
  vat_no: string;
  lan_no: string;
  logo: null | string;
  // status: boolean;
  phone: string;
  branch_count: number | null;
  user?: User;
  username?: string;
  password?: string;
  email: string;
}

export interface User {
  id: number;
  password: string;
  is_superuser: boolean;
  username: string;
  email: string;
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
}
