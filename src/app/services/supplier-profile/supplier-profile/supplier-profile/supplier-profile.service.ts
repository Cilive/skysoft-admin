import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SupplierProfile } from 'src/app/components/owner/supplier-profile/supplier-profile.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierProfileService {

  constructor(private http: HttpClient) { }

  postSupplier(darta: SupplierProfile) {
    return
  }
}
