import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { DepositAmount } from 'src/app/components/reports/deposit-amount/Deposit-Amount.modal';
import { BRANCH_REPORT_DEPOSIT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepositBranchService {
  constructor(private http: HttpClient) {}

  get_deposit_amount(id) {
    // const formData = convertJsontoFormData(data);

    // return this.http.post<ApiResponse<{}>>(
    //   environment.domain + deposite_amount,
    //   data
    // );

    let params: any = {
      branch: id.branch,
      owner: id.owner,
      account: id.ac_holder_name,
      // customer: id.customer,

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
      environment.domain + BRANCH_REPORT_DEPOSIT,

      {
        params: params,
      }
    );
  }

  // get_deposit_amount() {
  //   return this.http.get<ApiResponse<DepositAmount[]>>(
  //     environment.domain + deposite_amount
  //   );
  // }
  // get_bank_ac(id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
  //   );
  // }
  // update_deposit_amount(data, id) {
  //   console.log(data);
  //   return this.http.put<ApiResponse<{}>>(
  //     environment.domain + deposite_amount + id + '/',
  //     data
  //   );
  // }
  // delete_deposit_amount(id) {
  //   return this.http.delete<ApiResponse<any>>(
  //     environment.domain + deposite_amount + id + '/'
  //   );
  // }
  // suspend_deposit_amount(id) {
  //   return this.http.put<ApiResponse<any>>(
  //     environment.domain + 'owner/customer_suspend' + '/' + id + '/',
  //     {}
  //   );
  // }

  // get_Bank(data, id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain +
  //       'clients/c1.localhost/private/branch_bankac' +
  //       '/' +
  //       id +
  //       '/',
  //     data
  //   );
  // }
}
