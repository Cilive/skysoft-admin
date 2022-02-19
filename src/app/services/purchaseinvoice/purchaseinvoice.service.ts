import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { BankAccounts } from 'src/app/components/owner/bank-account-master/bank-account-master.model';
import {
  Oldbalance,
  purchaseInvoice,
} from 'src/app/components/owner/purchase-invoice/purchase-invoice.model';
import { purchseinvoices } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PurchaseinvoiceService {
  constructor(private http: HttpClient) {}

  post_purchase_invoice(data: purchaseInvoice) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + purchseinvoices,
      data
    );
  }

  get_purchase_invoice() {
    return this.http.get<ApiResponse<purchaseInvoice[]>>(
      environment.domain + purchseinvoices
    );
  }
  update_purchase_invoice(data: purchaseInvoice, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + purchseinvoices + id + '/',
      data
    );
  }
  delete_purchase_invoice(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + purchseinvoices + id + '/'
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
  get_branches() {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain + 'clients/c1.localhost/private/recipt/'
    );
  }
  get_old_balance(id) {
    return this.http.get<ApiResponse<Oldbalance>>(
      environment.domain +
        `clients/c1.localhost/private/old_balance_purchase/${id}/`
    );
  }
  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
    );
  }
  get_branch_purchase_invoices(id) {
    return this.http.get<ApiResponse<purchaseInvoice[]>>(
      environment.domain +
        `clients/c1.localhost/private/branch_purchase_invoices/${id}/`
    );
  }
  single_get_purchase_invoice(id) {
    return this.http.get<ApiResponse<purchaseInvoice>>(
      environment.domain + purchseinvoices + id + '/'
    );
  }
  // get_supplier_profile(id) {
  //   return this.http.get<ApiResponse<any[]>>(
  //     environment.domain + 'clients/c1.localhost/manager/supplier/' + id + '/'
  //   );
  // }
}
