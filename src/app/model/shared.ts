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
