import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchEmployeeComponent } from './branch-employee.component';

describe('BranchEmployeeComponent', () => {
  let component: BranchEmployeeComponent;
  let fixture: ComponentFixture<BranchEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BranchEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
