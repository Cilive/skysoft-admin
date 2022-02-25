import { TestBed } from '@angular/core/testing';

import { MeterReadingBranchService } from './meter-reading-branch.service';

describe('MeterReadingBranchService', () => {
  let service: MeterReadingBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterReadingBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
