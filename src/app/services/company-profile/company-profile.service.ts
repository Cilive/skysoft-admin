import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/components/admin/company-profile/company-profile.model';
import { Branch } from 'src/app/components/owner/branch/branch.modal';
import { CREATE_COMPANY } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { convertJsontoFormData } from '../general/general.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyProfileService {
  constructor(private http: HttpClient) {}

  post_company_proile(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + CREATE_COMPANY,
      data
    );
  }

  get_company_proiles() {
    return this.http.get<ApiResponse<Company[]>>(
      environment.domain + CREATE_COMPANY
    );
  }
  update_company_profile(data: FormData, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + CREATE_COMPANY + id + '/',
      data
    );
  }
  delete_company_profile(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + CREATE_COMPANY + id + '/'
    );
  }
  suspend_company_profile(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'administrator/company_suspend' + '/' + id + '/',
      {}
    );
  }
  get_branches() {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'clients/c1.localhost/private/customer/'
    );
  }
}
