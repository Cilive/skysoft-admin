import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PurchasedetilesBranch } from 'src/app/components/reports/parchase-detailes-branch/purchase-detailes-branch.modal';
import { BRANCH_PURCHASE_DETAILES } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseDetailesBranchService {
  constructor(private http: HttpClient) {}
  post_purchase_detailes(data: PurchasedetilesBranch) {
    // const formData = convertJsontoFormData(data);
    // return this.http.post<ApiResponse<{}>>(
    //   environment.domain + paymentin,
    //   data
    // );
  }
  get_purchase_detailes(id) {
    // let from = undefined;
    // let to = undefined;
    // if (id.updated_at && id.date) {
    //   id.updated_at.setHours(0, 0, 0);
    //   from = id.updated_at.toJSON();

    //   id.date.setHours(0, 0, 0);
    //   to = id.date.toJSON();
    // }
    let params: any = {
      supplier: id.suppier_name,
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
      environment.domain + BRANCH_PURCHASE_DETAILES,

      {
        params: params,
        // from: `${id.updated_at.getFullYear()}-${id.updated_at.getMonth()+1}-${id.updated_at.getDate()}`,
        // to:  `${id.date.getFullYear()}-${id.date.getMonth()+1}-${id.date.getDate()}`,
        // branches: id.branches,
        // amount: id.amount,
        // from: from,
        // to: to,
        // invoice_no: id.invoice_no,
      }
    );
  }

  // queryparams = [][
  //   ((supplier = '1'), (from = '2022-01-01'), (to = '2022-01-24'))
  // ];

  get_Supplier_Profile(id) {
    return this.http.get<ApiResponse<[]>>(
      `${environment.domain}clients/manager/supplier/${id}/`
    );
  }
}
