import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Branch } from 'src/app/components/branch/branch.modal';
import { Session } from 'src/app/components/owner/session/session.modal';
import { OWNER, SESSION } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  // constructor(private http: HttpClient) {}

  //   post_session(data) {
  //     // const formData = convertJsontoFormData(data);

  //     return this.http.post<ApiResponse<any>>(environment.domain + SESSION, data);
  //   }

  //   get_session() {
  //     return this.http.get<ApiResponse<any>>(environment.domain + SESSION);
  //   }
  //   update_session(data, id) {
  //     console.log(data);

  //     return this.http.put<ApiResponse<{}>>(
  //       environment.domain + SESSION + id + '/',
  //       data
  //     );
  //   }
  //   delete_session(id) {
  //     return this.http.delete<ApiResponse<any>>(
  //       environment.domain + SESSION + id + '/'
  //     );
  //   }
  //   //dispense listing api
  //   get_branches(id) {
  //     return this.http.get<ApiResponse<Branch[]>>(
  //       environment.domain + 'clients/c1.localhost/private/session/' + id + '/'
  //       // `${environment.domain}clients/c1.localhost/private/session/${id}/`
  //     );
  //   }
  // }

  // update_session: any;

  constructor(private http: HttpClient) {}

  post_session(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<any>>(environment.domain + SESSION, data);
  }

  get_session() {
    return this.http.get<ApiResponse<any>>(environment.domain + SESSION);
  }
  // update_session(data, id) {
  //   // console.log(data);

  //   return this.http.put<ApiResponse<{}>>(
  //     environment.domain + SESSION + id + '/',
  //     data
  //   );
  // }
  update_session(data: Session, id: number) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + SESSION + id + '/',
      data
    );
  }
  // single_get_purchase_invoice(id) {
  //   return this.http.get<ApiResponse<purchaseInvoice>>(
  //     environment.domain + purchseinvoices + id + '/'
  //   );
  // }

  delete_session(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + SESSION + id + '/'
    );
  }
  suspend_session(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/customer_suspend' + '/' + id + '/',
      {}
    );
  }
  get_branches(id) {
    return this.http.get<ApiResponse<Branch[]>>(
      environment.domain +
        'clients/c1.localhost/private/session/' +
        '/' +
        id +
        '/'
    );
  }
}
