import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss'],
})
export class OwnerComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    // this.router.navigateByUrl('owner/supplierprofile')
  }
}
