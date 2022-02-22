import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { sessionreportsowner } from 'src/app/model/api';
import { environment } from 'src/environments/environment';
import { ApiResponse } from 'src/app/model/shared';
import { Branch } from 'src/app/components/branch/branch.modal';

@Injectable({
  providedIn: 'root'
})
export class SessionReportsService {

  constructor(private http: HttpClient) { }

  get_session_reports(id) {
      let params: any = {
      branches: id.branches,

      // amount: id.amount,
      // from: from,
      // to: to,
      // invoice_no: id.invoice_no,
    };
    if (id.from_date && id.to_date) {
      (params.from = `${id.from_date.getFullYear()}-${
        id.from_date.getMonth() + 1
      }-${id.from_date.getDate()}`),
        (params.to = `${id.date.getFullYear()}-${
          id.to_date.getMonth() + 1
        }-${id.to_date.getDate()}`);
    }

    Object.keys(params).forEach((key) =>
      params[key] === undefined || params[key] === null
        ? delete params[key]
        : {}
    );
    return this.http.get<ApiResponse<any>>(
      environment.domain + sessionreportsowner,

      {
        params: params,
      }
    );
  }

  get_branches(id) {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'administrator/branches/' + id + '/'
    );
  }

}
