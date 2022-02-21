import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentOutReportBranchComponent } from './payment-out-report-branch.component';

describe('PaymentOutReportBranchComponent', () => {
  let component: PaymentOutReportBranchComponent;
  let fixture: ComponentFixture<PaymentOutReportBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentOutReportBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentOutReportBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
