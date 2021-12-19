import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiResponse, LoginResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { StoreService } from '../store/store.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  private url = environment.domain;

  constructor(private http: HttpClient) {}
  login({ email, password }: { email: string; password: string }) {
    let data = {
      email,
      password,
    };
    let url = this.url + 'administrator/login/';

    return this.http.post<LoginResponse>(url, data);
  }

  newToken(token) {
    return this.http.post<{ access: string }>(
      this.url + 'administrator/refresh/',
      { refresh: token }
    );
  }
  sendOtp = (email) => {
    let url = this.url + 'auth/forgot';

    return this.http.post<ApiResponse<{}>>(url, { email });
  };
  verifyOtp = (otp) =>
    this.http.put<ApiResponse<{}>>(this.url + 'auth/otp', {
      otp,
      time: new Date().getTime(),
    });
  changePassword = (password, email) => {
    let url = this.url + 'auth/change';

    return this.http.post<ApiResponse<{}>>(url, {
      password,
      email,
    });
  };
}

export const accessToken = new BehaviorSubject(
  new StoreService().retrieve('access')
);
