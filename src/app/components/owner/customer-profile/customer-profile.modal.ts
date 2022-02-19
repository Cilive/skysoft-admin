export interface CustomerProfile {
  en_name: string;
  id?: number;
  ar_name: string;
  en_place: string;
  ar_place: string;
  en_district: string;
  ar_district: string;
  vat_no: number;
  lan_no: number;
  mobile_no: number;
  branches: string | number;
  type: number;
}
