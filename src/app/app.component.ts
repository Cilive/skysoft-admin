import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { timer } from 'rxjs';
import {
  accessToken,
  AuthenticationService,
} from './services/authentication/authentication.service';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'skysoft-admin';
  constructor(
    private store: StoreService,
    private authentication: AuthenticationService
  ) {}
  ngOnInit(): void {
    const helper = new JwtHelperService();
    accessToken.subscribe((token) => {
      if (token) {
        const expiryTime = helper.getTokenExpirationDate(token);
        console.log(`@SchedulerTime (${expiryTime})`);
        timer(expiryTime).subscribe((_) => {
          console.log(`@SchedulerTime (${expiryTime})`);

          this.authentication
            .newToken(this.store.retrieve('token'))
            .subscribe((res) => {
              this.store.store('id', res.access);
              accessToken.next(res.access);
            });
        });
      }
    });
  }
}
