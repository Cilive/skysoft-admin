import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Addbranch } from 'src/app/components/owner/addbranch/addbranch.modal';

import { Branch } from 'src/app/components/branch/branch.modal';
import { ADDBRANCH } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AddbranchService {
  get_pump_employees() {
    throw new Error('Method not implemented.');
  }
  constructor(private http: HttpClient) {}

  post_addbranch(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + ADDBRANCH,
      data
    );
  }

  get_addbranch() {
    return this.http.get<ApiResponse<Addbranch[]>>(
      environment.domain + ADDBRANCH
    );
  }
  update_addbranch(data: Addbranch, id: number) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + ADDBRANCH + id + '/',
      data
    );
  }
  delete_addbranch(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + ADDBRANCH + id + '/'
    );
  }
  suspend_addbranch(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/ ADDBRANCH_suspend' + '/' + id + '/',
      {}
    );
    // branch listing api
  }
  get_branches(id) {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'administrator/branches/' + id + '/'
    );
  }
}
