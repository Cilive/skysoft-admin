import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBalanceBranchComponent } from './customer-balance-branch.component';

describe('CustomerBalanceBranchComponent', () => {
  let component: CustomerBalanceBranchComponent;
  let fixture: ComponentFixture<CustomerBalanceBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerBalanceBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBalanceBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
