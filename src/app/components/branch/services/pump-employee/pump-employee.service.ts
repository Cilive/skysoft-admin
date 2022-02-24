import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BRANCH_PUMP_EMPLOYEE } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';
import { PumbEmployee } from '../../components/pump-employee/pump-employee.model';

@Injectable({
  providedIn: 'root',
})
export class PumpEmployeeService {
  constructor(private http: HttpClient) {}

  post_pump_employee(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{ any }>>(
      environment.domain + BRANCH_PUMP_EMPLOYEE,
      data
    );
  }

  get_pump_employees() {
    return this.http.get<ApiResponse<PumbEmployee[]>>(
      environment.domain + BRANCH_PUMP_EMPLOYEE
    );
  }
  update_pump_employee(data: PumbEmployee, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + BRANCH_PUMP_EMPLOYEE + id + '/',
      data
    );
  }
  delete_pump_employee(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + BRANCH_PUMP_EMPLOYEE + id + '/'
    );
  }
  suspend_pump_employee(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'branch/pump_employee_suspend' + '/' + id + '/',
      {}
    );
  }
}
