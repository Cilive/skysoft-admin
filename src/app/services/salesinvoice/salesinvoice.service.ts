import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { BankAccounts } from 'src/app/components/owner/bank-account-master/bank-account-master.model';
import {
  BranchSaleInvoices,
  Invoice,
  Oldbalance,
} from 'src/app/components/owner/sales-invoice/invoice.model';
import { invoices } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SalesinvoiceService {
  constructor(private http: HttpClient) {}

  post_sales_invoice(data: Invoice) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(environment.domain + invoices, data);
  }

  get_sales_invoice() {
    return this.http.get<ApiResponse<Invoice[]>>(environment.domain + invoices);
  }
  update_sales_invoice(data: Invoice, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + invoices + id + '/',
      data
    );
  }
  delete_sales_invoice(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + invoices + id + '/'
    );
  }
  suspend_sales_invoice(id) {
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
      environment.domain + 'clients/c1.localhost/private/invoice/'
    );
  }
  get_old_balance(id) {
    return this.http.get<ApiResponse<Oldbalance>>(
      environment.domain + `clients/c1.localhost/private/old_balance/${id}/`
    );
  }
  get_bank(id) {
    return this.http.get<ApiResponse<BankAccounts[]>>(
      environment.domain + `clients/c1.localhost/private/branch_bankac/${id}/`
    );
  }
  get_branch_sale_invoices(id) {
    return this.http.get<ApiResponse<BranchSaleInvoices[]>>(
      environment.domain +
        `clients/c1.localhost/private/branch_sale_invoices/${id}/`
    );
  }
  single_get_sele_invoice(id) {
    return this.http.get<ApiResponse<Invoice>>(
      environment.domain + invoices + id + '/'
    );
  }
}
