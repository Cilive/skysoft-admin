import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParchaseDetailesBranchComponent } from './parchase-detailes-branch.component';

describe('ParchaseDetailesBranchComponent', () => {
  let component: ParchaseDetailesBranchComponent;
  let fixture: ComponentFixture<ParchaseDetailesBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParchaseDetailesBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParchaseDetailesBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
