import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { Cashmaster } from 'src/app/components/owner/cashmaster/cashmaster.modal';
import { cashmaster } from 'src/app/model/api';
import { Branch } from 'src/app/components/owner/branch/branch.modal';
import { Owner } from 'src/app/components/owner/company-owner/company-owner.model';

@Injectable({
  providedIn: 'root',
})
export class CashmasterService {
  get_branches: any;
  constructor(private http: HttpClient) {}

  post_Cashmaster(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{ any }>>(
      environment.domain + cashmaster,
      data
    );
  }

  get_Cashmaster() {
    return this.http.get<ApiResponse<Cashmaster[]>>(
      environment.domain + cashmaster
    );
  }
  update_Cashmaster(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + cashmaster + id + '/',
      data
    );
  }
  delete_Cashmaster(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + cashmaster + id + '/'
    );
  }
  suspend_Cashmaster(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/Cashmaster_suspend' + '/' + id + '/',
      {}
    );
  }
  // get_Cashmaster(id) {
  //   return this.http.get<ApiResponse<Owner[]>>(
  //     environment.domain + 'clients/c1.localhost/private/cashmaster/' + id + '/'
  //   );
  // }
}
