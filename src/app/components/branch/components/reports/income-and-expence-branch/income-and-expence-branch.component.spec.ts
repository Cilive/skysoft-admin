import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAndExpenceBranchComponent } from './income-and-expence-branch.component';

describe('IncomeAndExpenceBranchComponent', () => {
  let component: IncomeAndExpenceBranchComponent;
  let fixture: ComponentFixture<IncomeAndExpenceBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeAndExpenceBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAndExpenceBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
