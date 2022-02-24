import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { payment_due } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PaymentdueService {
  constructor(private http: HttpClient) {}

  get_payment_due(id) {
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
      supplier: id.supplier,
      // dispence: id.dispence,
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
      environment.domain + payment_due,

      {
        params: params,
      }
    );
  }

  // post_sales_invoice(data: PaymentDue) {
  //   // const formData = convertJsontoFormData(data);

  //   return this.http.post<ApiResponse<{}>>(
  //     environment.domain + payment_due,
  //     data
  //   );
  // }

  // get_sales_invoice() {
  //   return this.http.get<ApiResponse<PaymentDue[]>>(
  //     environment.domain + payment_due
  //   );
  // }
  // update_sales_invoice(data: PaymentDue, id) {
  //   return this.http.put<ApiResponse<{}>>(
  //     environment.domain + payment_due + id + '/',
  //     data
  //   );
  // }
  // delete_sales_invoice(id) {
  //   return this.http.delete<ApiResponse<any>>(
  //     environment.domain + payment_due + id + '/'
  //   );
  // }
  // suspend_sales_invoice(id) {
  //   return this.http.put<ApiResponse<any>>(
  //     environment.domain +
  //       'clients/c1.localhost/private/invoice/' +
  //       '/' +
  //       id +
  //       '/',
  //     {}
  //   );
  // }
  get_branches() {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'clients/c1.localhost/private/report/payment_due'
    );
  }
  // get_old_balance(id) {
  //   return this.http.get<ApiResponse<Oldbalance>>(
  //     environment.domain + `clients/c1.localhost/private/old_balance/${id}/`
  //   );
  // }
  // get_bank(id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
  //   );
  // }
  // get_branch_sale_invoices(id) {
  //   return this.http.get<ApiResponse<BranchSaleInvoices[]>>(
  //     environment.domain +
  //       `clients/c1.localhost/private/branch_sale_invoices/${id}/`
  //   );
}
// single_get_sele_invoice(id) {
//   return this.http.get<ApiResponse<PaymentDue>>(
//     environment.domain + payment_due + id + '/'
//   );
// }
