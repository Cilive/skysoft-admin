export interface Employee {
  phone: string;
  branches: number;
  iqama_no: string;
  username: string;
  password: string;
  email: string;
  name: string;
  id?: number;
  user?: User;
}
export interface User {
  id: number;
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
