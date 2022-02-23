import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BranchSaleInvoices,
  Oldbalance,
} from 'src/app/components/owner/sales-invoice/invoice.model';
import { BRANCH_INVOICES } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
// import { Branch } from '../../branch.modal';
import { BankAccounts } from '../../components/bank-account-master/bank-account-master.model';
import { Invoices } from '../../components/sales-invoice/sales-invoice.modal';

@Injectable({
  providedIn: 'root',
})
export class SalesinvoiceService {
  constructor(private http: HttpClient) {}

  post_sales_invoice(data: Invoices) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + BRANCH_INVOICES,
      data
    );
  }

  get_sales_invoice() {
    return this.http.get<ApiResponse<Invoices[]>>(
      environment.domain + BRANCH_INVOICES
    );
  }
  update_sales_invoice(data: Invoices, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_INVOICES + id + '/',
      data
    );
  }
  delete_sales_invoice(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_INVOICES + id + '/'
    );
  }
  suspend_sales_invoice(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain +
        'clients/c1.localhost/manager/invoice/' +
        '/' +
        id +
        '/',
      {}
    );
  }
  // get_branches() {
  //   return this.http.get<ApiResponse<Branch[]>>(
  //     environment.domain + 'clients/c1.localhost/private/invoice/'
  //   );
  // }
  get_old_balance(id) {
    return this.http.get<ApiResponse<Oldbalance>>(
      environment.domain + `clients/manager/old_balance/${id}/`
    );
  }
  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/manager/branch_bankac/`
    );
  }
  get_branch_sale_invoices(id) {
    return this.http.get<ApiResponse<BranchSaleInvoices[]>>(
      environment.domain + BRANCH_INVOICES
    );
  }
  single_get_sele_invoice(id) {
    return this.http.get<ApiResponse<Invoices>>(
      environment.domain + BRANCH_INVOICES
    );
  }
}
