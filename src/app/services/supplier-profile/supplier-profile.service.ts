import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/app/components/admin/company-profile/company-profile.model';
import { Branch } from 'src/app/components/owner/branch/branch.modal';
import { SupplierProfile } from 'src/app/components/owner/supplier-profile/supplier-profile.model';
import { SUPPLIER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SupplierProfileService {
  constructor(private http: HttpClient) {}

  post_supplier_profile(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(environment.domain + SUPPLIER, data);
  }

  get_supplier_profiles() {
    return this.http.get<ApiResponse<SupplierProfile[]>>(
      environment.domain + SUPPLIER
    );
  }
  update_supplier_profile(data: SupplierProfile) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + SUPPLIER + data.id + '/',
      data
    );
  }
  delete_supplier_profile(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + SUPPLIER + id + '/'
    );
  }
  suspend_supplier_profile(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/supplier_suspend' + '/' + id + '/',
      {}
    );
  }
  get_branches(id) {
    return this.http.get<ApiResponse<SupplierProfile[]>>(
      environment.domain + 'clients/c1.localhost/private/supplier/' + id + '/'
    );
  }
}
