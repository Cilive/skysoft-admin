import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOutReportComponent } from './payments-out-report.component';

describe('PaymentsOutReportComponent', () => {
  let component: PaymentsOutReportComponent;
  let fixture: ComponentFixture<PaymentsOutReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsOutReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsOutReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
