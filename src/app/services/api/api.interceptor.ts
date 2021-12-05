import { Inject, Injectable, InjectionToken } from "@angular/core";
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from "rxjs";
import { StoreService } from "../store/store.service";
import { catchError, timeout } from "rxjs/operators";
import { Router } from "@angular/router";
import { AlertService } from "../alert/alert.service";

export const DEFAULT_TIMEOUT = new InjectionToken<number>("defaultTimeout");
@Injectable({
  providedIn: "root",
})
export class ApiInterceptor implements HttpInterceptor {
  private token = null;
  constructor(
    @Inject(DEFAULT_TIMEOUT) protected defaultTimeout: number,
    private store: StoreService,
    private toast: AlertService,
    private route: Router,
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // accessToken.subscribe((res) => (this.token = res));

    if (this.token) {
      request = request.clone({
        headers: new HttpHeaders({ Autherization: `${this.token}` }),
      });
    }
    const timeoutValue = request.headers.get("timeout") || this.defaultTimeout;
    const timeoutValueNumeric = Number(timeoutValue);
    return next.handle(request).pipe(
      timeout(timeoutValueNumeric),
      catchError((err: HttpErrorResponse) => {
        let error = err.statusText;
        if (err.status === 0) error = "Server Timeout";
        if (err.status === 403) {
          if (this.store.retrieve("token")) {
            // this.authentication
            //   .newToken(this.store.retrieve("token"))
            //   .subscribe(
            //     (res) => (
            //       console.log("@Immediate Call"),
            //       accessToken.next(res.data.accessToken)
            //     )
            //   );
          }
        }
        if (err.status !== 403 && err.error.msg === "Login Again") {
          localStorage.clear();
          this.route.navigateByUrl("/login");
        }
        if (err.error.msg) {
          error = err.error.msg;
        }
        if (err.status !== 403) {
          this.toast.danger(error)

        }
        return throwError(err);
      })
    );
  }
}