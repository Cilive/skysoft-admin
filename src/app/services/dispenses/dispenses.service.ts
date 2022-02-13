import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BankAccounts } from 'src/app/components/owner/bank-account-master/bank-account-master.model';
import { Branch } from 'src/app/components/branch/branch.modal';
import { BRANCH_DISPENSES } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { Dispense } from 'src/app/components/owner/dispense/dispense .modal';

@Injectable({
  providedIn: 'root',
})
export class DispensesService {
  constructor(private http: HttpClient) {}

  post_dispense(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_DISPENSES,
      data
    );
  }

  get_dispenses() {
    return this.http.get<ApiResponse<any>>(
      environment.domain + BRANCH_DISPENSES
    );
  }
  update_dispense(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_DISPENSES + id + '/',
      data
    );
  }
  delete_dispense(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_DISPENSES + id + '/'
    );
  }
  //dispense listing api
  get_dispense(id) {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'clients/c1.localhost/private/dispense/' + id + '/'
    );
  }
  // branch listing api

  get_brnch_dispence() {
    return this.http.get<ApiResponse<Dispense[]>>(
      environment.domain + 'clients/c1.localhost/private/dispense/'

      // `${environment.domain}clients/c1.localhost/private/branch_dispence/'
    );
  }
}
