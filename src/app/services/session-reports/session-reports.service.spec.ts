import { TestBed } from '@angular/core/testing';

import { SessionReportsService } from './session-reports.service';

describe('SessionReportsService', () => {
  let service: SessionReportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionReportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
