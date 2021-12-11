import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CompanyProfile } from 'src/app/components/admin/company-profile/company-profile.model';
import { CREATE_COMPANY } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyProfileService {

  constructor(private http: HttpClient) { }

  post_company_proile(data: CompanyProfile) {
    return this.http.post<ApiResponse<{}>>(environment.domain + CREATE_COMPANY, data);
  }

  get_company_proiles() {
    return this.http.get<ApiResponse<{}>>(environment.domain + CREATE_COMPANY);
  }
}
