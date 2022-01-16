import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { htmlTextExtractor } from 'src/app/app.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router) {}
  extractor = htmlTextExtractor;
  ngOnInit(): void {
    // this.router.navigateByUrl('admin/companyprofile')
  }
}
