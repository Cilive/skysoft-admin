import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsInReportComponent } from './payments-in-report.component';

describe('PaymentsInReportComponent', () => {
  let component: PaymentsInReportComponent;
  let fixture: ComponentFixture<PaymentsInReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsInReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsInReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
