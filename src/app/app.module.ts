import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {
  ApiInterceptor,
  DEFAULT_TIMEOUT,
} from './services/api/api.interceptor';
import { TranslateModule } from '@ngx-translate/core';
import { CustomerBalanceComponent } from './components/reports/customer-balance/customer-balance.component';
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [AppComponent, ExampleComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    TranslateModule.forRoot(),
  ],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: ApiInterceptor, multi: true }],
    [{ provide: DEFAULT_TIMEOUT, useValue: 400000 }],
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
