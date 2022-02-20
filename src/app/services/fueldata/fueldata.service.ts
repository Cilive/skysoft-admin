import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Fuelmaster } from 'src/app/components/owner/vat-fuel-master/vat-fuel-master.model';
import { FUEL, VAT } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FueldataService {
  Fuelmaster: any;
  get_vat: any;
  suspend_vatAndFuel: any;
  update_FualRate: any;
  constructor(private http: HttpClient) {}

  post_fuelmaster(data) {
    return this.http.post<ApiResponse<{}>>(environment.domain + FUEL, data);
  }

  get_fuelDetails() {
    return this.http.get<ApiResponse<Fuelmaster[]>>(environment.domain + FUEL);
  }
  get_single_fuel(id) {
    return this.http.get<ApiResponse<Fuelmaster>>(
      environment.domain + FUEL + id + '/'
    );
  }
  update_fuelDetail(data, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + FUEL + id + '/',
      data
    );
  }
  delete_fuelDetail(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + FUEL + id + '/'
    );
  }

  // post_vat(data) {
  //   return this.http.post<ApiResponse<{}>>(environment.domain + VAT, data);
  // }

  // get_vat() {
  //   return this.http.get<ApiResponse<{ vat: number; id: number }>>(
  //     environment.domain + VAT
  //   );
  // }
  // update_vat(data, id) {
  //   return this.http.put<ApiResponse<{}>>(
  //     environment.domain + VAT + id + '/',
  //     data
  //   );
  // }
  // delete_vat(id) {
  //   return this.http.delete<ApiResponse<any>>(
  //     environment.domain + VAT + id + '/'
  //   );
  // }
  suspend_fuelmaster(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'clients/private/fuelmaster/' + id + '/',
      {}
    );
  }

  updateFualRate(data) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'clients/private/fuelmaster/',
      data
    );
  }
  get_fuelmaster(id) {
    return this.http.get<ApiResponse<Fuelmaster[]>>(
      environment.domain + 'clients/private/fuelmaster/' + id + '/'
    );
  }
}
