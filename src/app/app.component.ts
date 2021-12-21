import { AfterViewInit, Component, OnInit } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TranslateService } from '@ngx-translate/core';
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
export class AppComponent implements OnInit, AfterViewInit {
  title = 'skysoft-admin';
  extractor = htmlTextExtractor;
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
  ngAfterViewInit(): void {}
}

export function htmlTextExtractor() {
  // setTimeout(() => {
  //   let supp = {};
  //   document.body.innerText.split('\n').map((t) => {
  //     supp = { ...supp, [t]: t };
  //   });
  //   var dataStr =
  //     'data:text/json;charset=utf-8,' +
  //     encodeURIComponent(JSON.stringify(supp));
  //   var dlAnchorElem = document.createElement('a');
  //   dlAnchorElem.setAttribute('href', dataStr);
  //   dlAnchorElem.setAttribute('download', `${document.title}.json`);
  //   dlAnchorElem.click();
  // }, 1000);
}
