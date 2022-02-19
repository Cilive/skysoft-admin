import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { BankAccounts } from 'src/app/components/owner/bank-account-master/bank-account-master.model';
import { Expense } from 'src/app/components/owner/transactions/expenses/expense.modal';
import { expense } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ExpenseService {
  constructor(private http: HttpClient) {}

  post_expense(data: Expense) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<any>>(environment.domain + expense, data);
  }

  get_expense() {
    return this.http.get<ApiResponse<Expense[]>>(environment.domain + expense);
  }
  update_expense(data: Expense, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + expense + id + '/',
      data
    );
  }
  delete_expense(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + expense + id + '/'
    );
  }
  suspend_expense(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain +
        'clients/c1.localhost/private/expense/' +
        '/' +
        id +
        '/',
      {}
    );
  }
  get_branches() {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'clients/c1.localhost/private/expense/'
    );
  }
  // get_old_balance(id) {
  //   return this.http.get<ApiResponse<Oldbalance>>(
  //     environment.domain + `clients/c1.localhost/private/old_balance/${id}/`
  //   );

  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
    );
  }
  // get_branch_sale_invoices(id) {
  //   return this.http.get<ApiResponse<Expense[]>>(
  //     environment.domain +
  //       `clients/c1.localhost/private/branch_sale_invoices/${id}/`
  //   );
  // }
  // single_get_sele_invoice(id) {
  //   return this.http.get<ApiResponse<Expense>>(
  //     environment.domain + expense + id + '/'
  //   );
  // }
}

//   constructor(private http: HttpClient) {}

//   post_Expense(data: Expense) {

//     return this.http.post<ApiResponse<{}>>(environment.domain + expense, data);
//   }

//   update_Expence(data: Expense, id) {
//     return this.http.put<ApiResponse<{}>>(
//       environment.domain + expense + id + '/',
//       data
//     );
//   }
//   delete_Expense(id) {
//     return this.http.delete<ApiResponse<any>>(
//       environment.domain + expense + id + '/'
//     );
//   }
//   suspend_Expense(id) {
//     return this.http.put<ApiResponse<any>>(
//       environment.domain +
//         'clients/c1.localhost/private/invoice/' +
//         '/' +
//         id +
//         '/',
//       {}
//     );
//   }
//   get_branches() {
//     return this.http.get<ApiResponse<Branch[]>>(
//       environment.domain + 'clients/c1.localhost/private/invoice/'
//     );
//   }

//   get_bank(id) {
//     return this.http.get<ApiResponse<BankAccounts[]>>(
//       environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
//     );
//   }

// }
