import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositAmountBranchComponent } from './deposit-amount-branch.component';

describe('DepositAmountBranchComponent', () => {
  let component: DepositAmountBranchComponent;
  let fixture: ComponentFixture<DepositAmountBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositAmountBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositAmountBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
