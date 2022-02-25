import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentInReportBranchComponent } from './payment-in-report-branch.component';

describe('PaymentInReportBranchComponent', () => {
  let component: PaymentInReportBranchComponent;
  let fixture: ComponentFixture<PaymentInReportBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentInReportBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentInReportBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
