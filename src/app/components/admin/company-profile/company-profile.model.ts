// export interface CompanyProfile {
//   en_name: string;
//   ar_name: string;
//   en_place: string;
//   ar_place: string;
//   en_district: string;
//   ar_district: string;
//   cr_no: number;
//   vat_no: number;
//   lan_no: number;
//     email: string;
//     phone:number
//   password: string;
// //   confirm_password: string;
//   logo: any;
// }

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
  logo: string;
  phone: number;
  status?: boolean;
  password?: string;
  email: string;
  //   confirm_password: string;
  account?: Account;
}

export interface Account {
  email: string;
}
