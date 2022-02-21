import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentDueBranchComponent } from './payment-due-branch.component';

describe('PaymentDueBranchComponent', () => {
  let component: PaymentDueBranchComponent;
  let fixture: ComponentFixture<PaymentDueBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentDueBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentDueBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
