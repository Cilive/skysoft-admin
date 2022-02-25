import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountsReport } from 'src/app/components/reports/accounts-ladger-branch/accounts-ladger-branch.modal';
import { SessionReportBranch } from 'src/app/components/reports/session-report-branch/session-report-branch.modal';
import { BRANCH_REPORT_SESSION } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionReportBranchService {
  constructor(private http: HttpClient) {}

  // get_session() {
  //   return this.http.get<ApiResponse<any>>(
  //     environment.domain + BRANCH_REPORT_SESSION
  //   );
  // }

  // get_sessions() {
  //   return this.http.get<ApiResponse<SessionReportBranch[]>>(
  //     environment.domain + BRANCH_REPORT_SESSION
  //   );
  // }
  get_session_report(id) {
    // let from = undefined;
    // let to = undefined;
    // if (id.from_date && id.to_date) {
    //   id.from_date.setHours(0, 0, 0);
    //   from = id.from_date.toJSON();

    //   id.to_date.setHours(0, 0, 0);
    //   to = id.to_date.toJSON();
    // }
    let params: any = {
      // customer: id.customer,
      // invoice_no: id.invoice_no,
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
      environment.domain + BRANCH_REPORT_SESSION,

      {
        params: params,
      }
    );
  }

  get_acccounts_ladger(id) {
    return this.http.get<ApiResponse<AccountsReport[]>>(
      `${environment.domain}clients/manager/accounts_report/${id}/`

      // environment.domain + 'clients/manager/accounts_report/' + id + '/'
    );
  }
}
//   suspend_session(id) {
//     return this.http.put<ApiResponse<any>>(
//       environment.domain + 'owner/customer_suspend' + '/' + id + '/',
//       {}
//     );
//   }
// }
// `${environment.domain}clients/c1.localhost/private/branch_bankac/${id}/`;
