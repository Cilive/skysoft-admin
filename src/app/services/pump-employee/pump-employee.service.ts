import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from 'src/app/components/owner/pump-employee/pump-employee.model';
import { PUMP_EMPLOYEE } from 'src/app/model/api';
import { ApiResponse } from 'src/app/model/shared';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PumpEmployeeService {
  constructor(private http: HttpClient) {}

  post_pump_employee(data) {
    // const formData = convertJsontoFormData(data);

    return this.http.post<ApiResponse<{}>>(
      environment.domain + PUMP_EMPLOYEE,
      data
    );
  }

  get_pump_employees() {
    return this.http.get<ApiResponse<Employee[]>>(
      environment.domain + PUMP_EMPLOYEE
    );
  }
  update_pump_employee(data: Employee, id) {
    return this.http.put<ApiResponse<{}>>(
      environment.domain + PUMP_EMPLOYEE + id + '/',
      data
    );
  }
  delete_pump_employee(id) {
    return this.http.delete<ApiResponse<any>>(
      environment.domain + PUMP_EMPLOYEE + id + '/'
    );
  }
  suspend_pump_employee(id) {
    return this.http.put<ApiResponse<any>>(
      environment.domain + 'owner/pump_employee_suspend' + '/' + id + '/',
      {}
    );
  }
}
