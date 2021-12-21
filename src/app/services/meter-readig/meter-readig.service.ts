import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeterReadigService {
  constructor(private http: HttpClient) {}
  getReports(id) {
    return this.http.get(environment.domain + 'owner/reading?no=' + id);
  }
}
