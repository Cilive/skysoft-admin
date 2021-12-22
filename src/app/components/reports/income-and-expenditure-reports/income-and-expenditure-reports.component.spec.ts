import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeAndExpenditureReportsComponent } from './income-and-expenditure-reports.component';

describe('IncomeAndExpenditureReportsComponent', () => {
  let component: IncomeAndExpenditureReportsComponent;
  let fixture: ComponentFixture<IncomeAndExpenditureReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeAndExpenditureReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeAndExpenditureReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
