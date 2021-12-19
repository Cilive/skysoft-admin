import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fuel-management',
  templateUrl: './fuel-management.component.html',
  styleUrls: ['./fuel-management.component.scss']
})
export class FuelManagementComponent implements OnInit {
  isVatMaster=true
  constructor() { }

  ngOnInit(): void {
  }

}
