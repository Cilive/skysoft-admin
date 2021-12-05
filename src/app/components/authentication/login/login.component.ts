import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Role } from 'src/app/model/shared';
import {
  accessToken,
  AuthenticationService,
} from 'src/app/services/authentication/authentication.service';
import { validateForm } from 'src/app/services/general/general.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authentication: AuthenticationService,
    private store: StoreService,
    private route: Router // private hospital:HospitalService
  ) {}
  cn = console;
  username = '';
  password = '';
  selectedHospital: number;
  ngOnInit(): void {
    if (
      this.store.retrieve('token') !== null &&
      this.store.retrieve('role') !== null
    ) {
      const role = Number(this.store.retrieve('role'));

      switch (true) {
        case Role.admin === role:
          this.route.navigateByUrl('/admin');
          break;
        case Role.owner === role:
          this.route.navigateByUrl('/owner');
          break;
      }
    }
  }
  login() {
    // const login = tempLogin({
    //   username: this.username,
    //   password: this.password,
    // });
    // if (login) {
    //   this.ngOnInit();
    // }

    if (validateForm('form')) {
      this.authentication
        .login({
          password: this.password,
          email: this.username,
        })
        .subscribe((res) => {
          const user = res.data;
          if (user !== null) {
            console.log(user);

            this.store.store('role', user.role);
            this.store.store('token', user.refreshToken);
            this.store.store('id', user.accessToken);
            accessToken.next(user.accessToken);
            if (user.role === Role.admin) this.route.navigateByUrl('/admin');
            if (user.role === Role.owner) this.route.navigateByUrl('/owner');
          }
        });
    }
  }
  navigate() {
    this.route.navigateByUrl('/forgot_password');
  }
}

const TemprorayAccounts = [
  {
    username: 'admin@gmail.com',
    password: '1234',
    role: 0,
  },
  {
    username: 'owner@gmail.com',
    password: '1234',
    role: 1,
  },
];

function tempLogin({ username, password }) {
  const user = TemprorayAccounts.filter(
    (t) => t.username === username && t.password === password
  );
  console.log(user);

  if (user.length > 0) {
    new StoreService().store('role', user[0].role);
    new StoreService().store('token', 'testRefresh');
    new StoreService().store('id', 'testAccess');
    new StoreService().store('name', 'Robert Devasia');
    return true;
  }
  return false;
}
