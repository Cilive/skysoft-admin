import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OWNER } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OwnersService {
  constructor(private http: HttpClient) {}

  post_owner(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(environment.domain + OWNER, data);
  }

  get_owners() {
    return this.http.get<ApiResponse<[]>>(environment.domain + OWNER);
  }
  update_owner(data, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + OWNER + id + '/',
      data
    );
  }
  delete_owner(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + OWNER + id + '/'
    );
  }
  suspend_owner(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/customer_suspend' + '/' + id + '/',
      {}
    );
  }
}
