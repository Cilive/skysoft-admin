import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Expense } from 'src/app/components/owner/transactions/expenses/expense.modal';
import { BRANCH_EXPENSE } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { BankAccounts } from '../../components/bank-account-master/bank-account-master.model';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}
  post_expense(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_EXPENSE,
      data
    );
  }
  get_expense() {
    return this.http.get<ApiResponse<Expense[]>>(
      environment.domain + BRANCH_EXPENSE
    );
  }
  update_expense(data, id) {
    console.log(data);
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_EXPENSE + id + '/',
      data
    );
  }
  delete_expense(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_EXPENSE + id + '/'
    );
  }

  suspend_expense(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'branch/expense_suspend' + '/' + id + '/',
      {}
    );
  }
  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/c1.localhost/manager/branch_bankac/`
    );
  }
}
