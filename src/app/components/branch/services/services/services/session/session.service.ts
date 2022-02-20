import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_SESSION } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { Session } from '../../../../components/session/session.modal';

@Injectable({
  providedIn: 'root',
})
export class SessionService {
  constructor(private http: HttpClient) {}

  post_session(data) {
    return this.http.post<ApiResponse<any>>(
      environment.domain + BRANCH_SESSION,
      data
    );
  }

  get_session() {
    return this.http.get<ApiResponse<any>>(environment.domain + BRANCH_SESSION);
  }

  update_session(data: Session, id: number) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_SESSION + id + '/',
      data
    );
  }

  delete_session(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_SESSION + id + '/'
    );
  }
  // suspend_session(id) {
  //   return this.http.put<ApiResponse<any>>(
  //     environment.domain + 'branch/customer_suspend' + '/' + id + '/',
  //     {}
  //   );
  // }
}
