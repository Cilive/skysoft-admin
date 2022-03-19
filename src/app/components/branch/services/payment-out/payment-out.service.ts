import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_PAYMENTOUT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentOutService {
 constructor(private http: HttpClient) {}
 
  get_payment_out(id) {
   
    let params: any = {
      // branches: id.branches,
      customer: id.customer,
     
    };
    if (id.updated_at && id.date) {
      (params.from = `${id.updated_at.getFullYear()}-${
        id.updated_at.getMonth() + 1
      }-${id.updated_at.getDate()}`),
        (params.to = `${id.date.getFullYear()}-${
          id.date.getMonth() + 1
        }-${id.date.getDate()}`);
    }

    Object.keys(params).forEach((key) =>
      params[key] === undefined || params[key] === null
        ? delete params[key]
        : {}
    );
    return this.http.get<ApiResponse<any>>(
      environment.domain + BRANCH_PAYMENTOUT,

      {
        params: params,
      }
    );
  }

