import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionReportBranchComponent } from './session-report-branch.component';

describe('SessionReportBranchComponent', () => {
  let component: SessionReportBranchComponent;
  let fixture: ComponentFixture<SessionReportBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionReportBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionReportBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
