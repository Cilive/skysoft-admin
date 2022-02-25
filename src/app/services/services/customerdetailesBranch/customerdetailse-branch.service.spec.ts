import { TestBed } from '@angular/core/testing';

import { CustomerdetailseBranchService } from './customerdetailse-branch.service';

describe('CustomerdetailseBranchService', () => {
  let service: CustomerdetailseBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerdetailseBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
