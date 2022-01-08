export interface TableDetails<T> {
  headings: string[];
  data: T[];
}
export enum Role {
  admin = 0,
  owner = 1,
}
export interface ApiResponse<T> {
  status: 'success' | 'failure';
  msg: string;
  data: T;
}

export interface LoginResponse {
  refresh: string;
  access: string;
  username: string;
  is_admin: boolean;
  is_company: boolean;
  is_employee: boolean;
  is_branch_user: boolean;
  is_superuser: boolean;
  company_id: number;
  emp_company_user_id: null;
  emp_tenant_name: null;
}
