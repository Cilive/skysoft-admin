import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_PAYMENT_IN } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseInReportBranchService {
  constructor(private http: HttpClient) {}
  // post_paymen_out(data: Debtors) {
  //   // const formData = convertJsontoFormData(data);

  //   return this.http.post<ApiResponse<{}>>(
  //     environment.domain + paymentout,
  //     data
  //   );
  // }
  get_payment_in_report(id) {
    // let from = undefined;
    // let to = undefined;
    // if (id.updated_at && id.date) {
    //   id.updated_at.setHours(0, 0, 0);
    //   from = id.updated_at.toJSON();

    //   id.date.setHours(0, 0, 0);
    //   to = id.date.toJSON();
    // }
    let params: any = {
      supplier: id.supplier_name,
      invoice_no: id.invoice_no,
      // amount: id.amount,
      // from: from,
      // to: to,
      // invoice_no: id.invoice_no,
    };
    if (id.updated_at && id.date) {
      (params.from = `${id.updated_at.getFullYear()}-${
        id.updated_at.getMonth() + 1
      }-${id.updated_at.getDate()}`),
        (params.to = `${id.date.getFullYear()}-${
          id.date.getMonth() + 1
        }-${id.date.getDate()}`);
    }

    Object.keys(params).forEach((key) =>
      params[key] === undefined || params[key] === null
        ? delete params[key]
        : {}
    );
    return this.http.get<ApiResponse<any>>(
      environment.domain + BRANCH_PAYMENT_IN,

      {
        params: params,
      }
    );
  }
}
