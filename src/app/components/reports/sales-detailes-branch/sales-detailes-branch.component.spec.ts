import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDetailesBranchComponent } from './sales-detailes-branch.component';

describe('SalesDetailesBranchComponent', () => {
  let component: SalesDetailesBranchComponent;
  let fixture: ComponentFixture<SalesDetailesBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesDetailesBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesDetailesBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
