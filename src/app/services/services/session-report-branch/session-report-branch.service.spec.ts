import { TestBed } from '@angular/core/testing';

import { SessionReportBranchService } from './session-report-branch.service';

describe('SessionReportBranchService', () => {
  let service: SessionReportBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionReportBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
