import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { CASHMASTER } from 'src/app/model/api';
import { Cashmaster } from '../../components/cashmaster/cashmaster.modal';
import { Owner } from '../../components/company-owner/company-owner.modal';

@Injectable({
  providedIn: 'root',
})
export class CashmasterService {
  get_branches: any;
  constructor(private http: HttpClient) {}

  post_Cashmaster(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{ any }>>(
      environment.domain + CASHMASTER,
      data
    );
  }

  get_Cashmaster() {
    return this.http.get<ApiResponse<Cashmaster[]>>(
      environment.domain + CASHMASTER
    );
  }
  update_Cashmaster(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + CASHMASTER + id + '/',
      data
    );
  }
  delete_Cashmaster(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + CASHMASTER + id + '/'
    );
  }
  suspend_Cashmaster(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'branch/Owner_suspend' + '/' + id + '/',
      {}
    );
  }
  // get_Cashmaster(id) {
  //   return this.http.get<ApiResponse<Owner[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/cashmaster/' + id + '/'
  //   );
  // }
}
