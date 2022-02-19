export interface PumbEmployee {
  [x: string]: any;
  phone: string;
  password?: string;
  email: string;
  name: string;
  id?: number;
  username: string;
  iqama_no: string;

  user?: {
    email: string;
  };
}
