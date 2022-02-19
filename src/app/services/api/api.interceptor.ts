import { Inject, Injectable, InjectionToken } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { StoreService } from '../store/store.service';
import { catchError, timeout } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AlertService } from '../alert/alert.service';
import {
  accessToken,
  AuthenticationService,
} from '../authentication/authentication.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Role } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

export const DEFAULT_TIMEOUT = new InjectionToken<number>('defaultTimeout');
@Injectable({
  providedIn: 'root',
})
export class ApiInterceptor implements HttpInterceptor {
  private token: string;
  constructor(
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    private store: StoreService,
    private toast: AlertService,
    private route: Router,
    private authentication: AuthenticationService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    accessToken.subscribe((res) => (this.token = res));

    if (this.token) {
      request = modifyUrl(request, this.token);
    }
    const timeoutValue = request.headers.get('timeout') || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);
    return next.handle(request).pipe(
      timeout(timeoutValueNumeric),
      catchError((err: HttpErrorResponse) => {
        let error = err.statusText;
        if (err.status === 0) error = 'Server Timeout';
        // console.info(err);
        // if(err.error)
        if (err.error) {
          if (err.error.code === 'token_not_valid') {
            if (this.store.retrieve('token')) {
              this.authentication
                .newToken(this.store.retrieve('token'))
                .subscribe((res) => {
                  new StoreService().store('access', res.access);
                  accessToken.next(res.access);
                  console.log(request);
                  next.handle(request);
                });
            }
          }
          if (err.error.msg) {
            error = err.error.msg;
          }
        }

        // if (err.status !== 403 && err.error.msg === 'Login Again') {
        //   localStorage.clear();
        //   this.route.navigateByUrl('/login');
        // }

        if (err.status !== 401) {
          this.toast.danger(error);
        }

        return throwError(() => err);
      })
    );
  }
}
/**
 * Function to modify request according to logined user
 *  This is needed due to mulit-tenant platform of requesting in different schematic stores
 * modif
 *
 * @param request @typedef {HttpRequest}
 * @param token @typedef {string}
 * @returns {HttpRequest}
 */

function modifyUrl(
  request: HttpRequest<unknown>,
  token: string
): HttpRequest<unknown> {
  const user = new JwtHelperService().decodeToken(token);
  console.log(user);

  const role = Number(new StoreService().retrieve('role'));
  switch (role) {
    case Role.owner:
      {
        const url = request.url.split('/clients');
        request = request.clone({
          // withCredentials: true,
          headers: new HttpHeaders({
            authorization: `Bearer ${token}`,
          }),
        });
        if (url.length > 1) {
          const username = user.username;
          const templateUrl = `${url[0]}/clients/${username}${url[1]}`;
          console.log(templateUrl);

          request = request.clone({
            url: templateUrl,
            // withCredentials: true,
            headers: new HttpHeaders({
              authorization: `Bearer ${token}`,
            }),
          });
        }
      }
      break;
    case Role.maneger: {
      const url = request.url.split('/clients');
      request = request.clone({
        // withCredentials: true,
        headers: new HttpHeaders({
          authorization: `Bearer ${token}`,
        }),
      });
      if (url.length > 1) {
        const username = user.branch_tenant_name.username;
        const templateUrl = `${url[0]}/clients/${username}${url[1]}`;
        console.log(templateUrl);

        request = request.clone({
          url: templateUrl,
          // withCredentials: true,
          headers: new HttpHeaders({
            authorization: `Bearer ${token}`,
          }),
        });
      }
    }
  }
  return request;
}
