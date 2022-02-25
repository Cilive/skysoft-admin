import { TestBed } from '@angular/core/testing';

import { ExpenceDetailsBranchService } from './expence-details-branch.service';

describe('ExpenceDetailsBranchService', () => {
  let service: ExpenceDetailsBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpenceDetailsBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
