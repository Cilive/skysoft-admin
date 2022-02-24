import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fuelstock } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FuelstockService {
  constructor(private http: HttpClient) {}

  post_fuelstock(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + fuelstock,
      data
    );
  }

  get_fuelstock() {
    return this.http.get<ApiResponse<any>>(environment.domain + fuelstock);
  }
  update_fuelstock(data, id) {
    console.log(data);

    return this.http.put<ApiResponse<{}>>(
      environment.domain + fuelstock + id + '/',
      data
    );
  }
  delete_fuelstock(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + fuelstock + id + '/'
    );
  }
  //dispense listing api
  // get_fuelstock(id) {
  //   return this.http.get<ApiResponse<Branch[]>>(
  //     environment.domain + 'clients/manager/fuelstock/' + id + '/'
  //   );
  // }
}
// branch listing api

// get_brnch_dispence() {
//   return this.http.get<ApiResponse<Dispense[]>>(
//     environment.domain + 'clients/c1.localhost/private/dispense/'

// `${environment.domain}clients/c1.localhost/private/branch_dispence/'

//   }
// }
