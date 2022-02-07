import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccounts } from 'src/app/components/owner/bank-account-master/bank-account-master.model';
import { BANK_ACCOUNTS } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BankAccountMasterService {
  constructor(private http: HttpClient) {}

  post_bank_account(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BANK_ACCOUNTS,
      data
    );
  }

  get_bank_accounts() {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + BANK_ACCOUNTS
    );
  }
  update_bank_account(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BANK_ACCOUNTS + id + '/',
      data
    );
  }
  delete_bank_account(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BANK_ACCOUNTS + id + '/'
    );
  }
  suspend_bank_account(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/bank_suspend' + '/' + id + '/',
      {}
    );
  }

  get_branchwaisebank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + '/clients/c1.localhost/private/bank/' + id + '/'
    );
  }
  // get_bankac(id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain +
  //       'clients/c1.localhost/private/branch_bankac' +
  //       '/' +
  //       id +
  //       '/'
  //   );
  // }
  // get_Bank(id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain +
  //       'clients/c1.localhost/private/branch_bankac' +
  //       '/' +
  //       id +
  //       '/'
  //   );
  // }
  get_bank_ac(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      `${environment.domain}clients/c1.localhost/private/branch_bankac/${id}/`
    );
  }
}
