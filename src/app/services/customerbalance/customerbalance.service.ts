import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { Customerbalance } from 'src/app/components/reports/customer-balance/customer-balance.modal';
import { customerbalance } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CustomerbalanceService {
  constructor(private http: HttpClient) {}
  // post_paymen_out(data: Debtors) {
  //   // const formData = convertJsontoFormData(data);

  //   return this.http.post<ApiResponse<{}>>(
  //     environment.domain + paymentout,
  //     data
  //   );
  // }
  get_customer_balance(id) {
    // let from = undefined;
    // let to = undefined;
    // if (id.updated_at && id.date) {
    //   id.updated_at.setHours(0, 0, 0);
    //   from = id.updated_at.toJSON();

    //   id.date.setHours(0, 0, 0);
    //   to = id.date.toJSON();
    // }
    let params: any = {
      branches: id.branches,
      // customer: id.customer,
      // ar_name: id.customer_ar_name,
      // name: id.customer_name,
      // mobile: id.phone_no,
      // invoice_no: id.invoice_no,
      // lan: id.lan,
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
      environment.domain + customerbalance,

      {
        params: params,
      }
    );
  }

  single_get_customer_balance(id) {
    return this.http.get<ApiResponse<Customerbalance>>(
      environment.domain + customerbalance + id + '/'
    );
  }

  // suspend_payment_out(id) {
  //   return this.http.put<ApiResponse<Debtors>>(
  //     environment.domain + 'owner/payment_in_suspend' + '/' + id + '/',
  //     {}
  //   );
  // }
}
