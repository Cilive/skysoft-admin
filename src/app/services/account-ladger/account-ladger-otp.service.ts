import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AccountsReports } from 'src/app/components/reports/accound-ladger/account-ladger.modal';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AccountLadgerOtpService {
  constructor(private http: HttpClient) {}

  get_acccounts_ladger(id) {
    return this.http.get<ApiResponse<AccountsReports[]>>(
      `${environment.domain}clients/private/accounts_report/${id}/`
    );
  }
}
