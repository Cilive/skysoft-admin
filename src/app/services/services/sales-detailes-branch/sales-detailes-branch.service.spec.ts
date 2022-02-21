import { TestBed } from '@angular/core/testing';

import { SalesDetailesBranchService } from './sales-detailes-branch.service';

describe('SalesDetailesBranchService', () => {
  let service: SalesDetailesBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesDetailesBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
