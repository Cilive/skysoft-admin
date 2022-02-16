import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccounts } from '../../components/bank-account-master/bank-account-master.model';
import { BRANCH_BANK_ACCOUNTS } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BankAccountMasterService {
  get_branches: any;
  constructor(private http: HttpClient) {}

  post_bank_account(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_BANK_ACCOUNTS,
      data
    );
  }

  get_bank_accounts() {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + BRANCH_BANK_ACCOUNTS
    );
  }
  update_bank_account(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_BANK_ACCOUNTS + id + '/',
      data
    );
  }
  delete_bank_account(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_BANK_ACCOUNTS + id + '/'
    );
  }
  suspend_bank_account(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/bank_suspend' + '/' + id + '/',
      {}
    );
  }

  //  get_bank_account(id) {
  //     return this.http.get<ApiResponse<Branch[]>>(
  //       environment.domain + '/clients/c1.localhost/private/bank/' + id + '/'
  //     );
  get_bank_ac() {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + 'clients/c1.localhost/manager/branch_bankac/'
    );
  }
}
