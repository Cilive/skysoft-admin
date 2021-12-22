import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Deposit } from 'src/app/components/owner/transactions/deposit/deposit.model';
import { DEPOSIT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class DepositsService {
  constructor(private http: HttpClient) {}

  post_deposit(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(environment.domain + DEPOSIT, data);
  }

  get_deposits() {
    return this.http.get<ApiResponse<Deposit[]>>(environment.domain + DEPOSIT);
  }
  update_deposit(data, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + DEPOSIT + id + '/',
      data
    );
  }
  delete_deposit(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + DEPOSIT + id + '/'
    );
  }
  suspend_deposit(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/customer_suspend' + '/' + id + '/',
      {}
    );
  }
}
