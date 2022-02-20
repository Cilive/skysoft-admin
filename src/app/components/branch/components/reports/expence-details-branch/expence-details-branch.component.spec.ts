import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenceDetailsBranchComponent } from './expence-details-branch.component';

describe('ExpenceDetailsBranchComponent', () => {
  let component: ExpenceDetailsBranchComponent;
  let fixture: ComponentFixture<ExpenceDetailsBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenceDetailsBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpenceDetailsBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
