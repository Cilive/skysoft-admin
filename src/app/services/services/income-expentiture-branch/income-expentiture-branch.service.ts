import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_INCOME_EXPNDITURE } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class IncomeExpentitureBranchService {
  constructor(private http: HttpClient) {}

  // post_paymen_out(data: Debtors) {
  //   // const formData = convertJsontoFormData(data);

  //   return this.http.post<ApiResponse<{}>>(
  //     environment.domain + paymentout,
  //     data
  //   );
  // }
  get_income(id) {
    // let from = undefined;
    // let to = undefined;
    // if (id.from_date && id.to_date) {
    //   id.from_date.setHours(0, 0, 0);
    //   from = id.updated_at.toJSON();

    //   id.to_date.setHours(0, 0, 0);
    //   to = id.to_date.toJSON();
    // }
    let params: any = {
      // customer: id.customer,
      // amount: id.amount,
      // from: from,
      // to: to,
      // invoice_no: id.invoice_no,
    };
    if (id.from_date && id.to_date) {
      (params.from = `${id.from_date.getFullYear()}-${
        id.from_date.getMonth() + 1
      }-${id.from_date.getDate()}`),
        (params.to = `${id.to_date.getFullYear()}-${
          id.to_date.getMonth() + 1
        }-${id.to_date.getDate()}`);
    }

    Object.keys(params).forEach((key) =>
      params[key] === undefined || params[key] === null
        ? delete params[key]
        : {}
    );
    return this.http.get<ApiResponse<any>>(
      environment.domain + BRANCH_INCOME_EXPNDITURE,

      {
        params: params,
      }
    );
  }
}
