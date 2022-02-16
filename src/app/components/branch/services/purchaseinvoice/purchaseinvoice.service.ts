import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_RECIEPT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { BankAccounts } from '../../components/bank-account-master/bank-account-master.model';
import {
  Oldbalances,
  Purchaseinvoices,
} from '../../components/purchase-invoice/purchase invoice.model';
import { SupplierProfile } from '../../components/supplier-profile/supplier-profile.model';

@Injectable({
  providedIn: 'root',
})
export class PurchaseinvoiceService {
  constructor(private http: HttpClient) {}

  post_purchase_invoice(data: Purchaseinvoices) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_RECIEPT,
      data
    );
  }

  get_purchase_invoice() {
    return this.http.get<ApiResponse<Purchaseinvoices[]>>(
      environment.domain + BRANCH_RECIEPT
    );
  }
  update_purchase_invoice(data: Purchaseinvoices, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_RECIEPT + id + '/',
      data
    );
  }
  delete_purchase_invoice(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_RECIEPT + id + '/'
    );
  }
  suspend_purchase_invoice(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain +
        'clients/c1.localhost/private/invoice/' +
        '/' +
        id +
        '/',
      {}
    );
  }
  // get_branches() {
  //   return this.http.get<ApiResponse<Branch[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/recipt/'
  //   );
  // }
  get_old_balance(id) {
    return this.http.get<ApiResponse<Oldbalances>>(
      environment.domain +
        `clients/c1.localhost/manager/old_balance_purchase/${id}/`
    );
  }
  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/c1.localhost/manager/branch_bankac/`
    );
  }
  get_supplier_profiles(data: Purchaseinvoices) {
    return this.http.get<ApiResponse<SupplierProfile[]>>(
      environment.domain + 'clients/c1.localhost/manager/branch_suppliers/'
    );
  }

  // get_branch_purchase_invoices(id) {
  //   return this.http.get<ApiResponse<Purchaseinvoices[]>>(
  //     environment.domain + `clients/c1.localhost/manager/purchase_invoices/`
  //   );
  // }
  single_get_purchase_invoice(id) {
    return this.http.get<ApiResponse<Purchaseinvoices>>(
      environment.domain + BRANCH_RECIEPT + id + '/'
    );
  }
  get_branchwais_supplier_profiles(id) {
    return this.http.get<ApiResponse<[]>>(
      environment.domain + 'clients/c1.localhost/manager/branch_supplier/'
    );
  }
  // get_supplier_profile(id) {
  //   return this.http.get<ApiResponse<any[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/supplier/' + id + '/'
  //   );
  // }
}
