import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerDetailsBranchComponent } from './customer-details-branch.component';

describe('CustomerDetailsBranchComponent', () => {
  let component: CustomerDetailsBranchComponent;
  let fixture: ComponentFixture<CustomerDetailsBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerDetailsBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerDetailsBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
