import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositBranchComponent } from './deposit-branch.component';

describe('DepositBranchComponent', () => {
  let component: DepositBranchComponent;
  let fixture: ComponentFixture<DepositBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DepositBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
