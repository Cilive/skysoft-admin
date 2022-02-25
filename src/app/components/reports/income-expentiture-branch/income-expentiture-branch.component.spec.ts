import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeExpentitureBranchComponent } from './income-expentiture-branch.component';

describe('IncomeExpentitureBranchComponent', () => {
  let component: IncomeExpentitureBranchComponent;
  let fixture: ComponentFixture<IncomeExpentitureBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeExpentitureBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeExpentitureBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
