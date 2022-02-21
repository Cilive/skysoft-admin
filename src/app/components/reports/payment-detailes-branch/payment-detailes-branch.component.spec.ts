import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDetailesBranchComponent } from './payment-detailes-branch.component';

describe('PaymentDetailesBranchComponent', () => {
  let component: PaymentDetailesBranchComponent;
  let fixture: ComponentFixture<PaymentDetailesBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDetailesBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDetailesBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
