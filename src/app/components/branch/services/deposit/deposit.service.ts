import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_DEPOSIT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { Deposit } from '../../components/transactions/deposit/deposit.model';
// import { Deposit } from '../../../components/transactions/deposit/deposit.model';
// import { Deposit } from '../../components/transactions/deposit/deposit.model';

@Injectable({
  providedIn: 'root',
})
export class DepositService {
  constructor(private http: HttpClient) {}
  post_deposit(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_DEPOSIT,
      data
    );
  }

  get_deposit() {
    return this.http.get<ApiResponse<Deposit[]>>(
      environment.domain + BRANCH_DEPOSIT
    );
  }
  // get_bank_ac(id) {
  //   return this.http.get<ApiResponse<BankAccounts[]>>(
  //     environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
  //   );
  // }
  update_deposit(data, id) {
    console.log(data);
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_DEPOSIT + id + '/',
      data
    );
  }
  delete_deposit(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_DEPOSIT + id + '/'
    );
  }
  suspend_deposit(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'branch/customer_suspend' + '/' + id + '/',
      {}
    );
  }
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
