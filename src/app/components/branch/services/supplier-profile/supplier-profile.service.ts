import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierProfile } from '../../components/supplier-profile/supplier-profile.model';
import { BRANCH_SUPPLIER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { Purchaseinvoices } from '../../components/purchase-invoice/purchase invoice.model';

@Injectable({
  providedIn: 'root',
})
export class SupplierProfileService {
  constructor(private http: HttpClient) {}

  post_supplier_profile(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_SUPPLIER,
      data
    );
  }

  get_supplier_profiles() {
    return this.http.get<ApiResponse<SupplierProfile[]>>(
      environment.domain + BRANCH_SUPPLIER
    );
  }
  update_supplier_profile(data: SupplierProfile) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_SUPPLIER + data.id + '/',
      data
    );
  }
  delete_supplier_profile(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_SUPPLIER + id + '/'
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
  // get_supplier_Profile() {
  //   return this.http.put<ApiResponse<any>>(
  //     environment.domain + 'clients/c1.localhost/manager/supplier/'
  //   );
  // }
  // get_supplier_profile(data: Purchaseinvoices) {
  //   return this.http.get<ApiResponse<any[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/supplier/'
  //   );
  // }

  get_supplier_profile() {
    return this.http.get<ApiResponse<any[]>>(
      environment.domain + 'clients/c1.localhost/manager/branch_suppliers/'
    );
  }
}
