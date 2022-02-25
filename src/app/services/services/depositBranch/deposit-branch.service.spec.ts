import { TestBed } from '@angular/core/testing';

import { DepositBranchService } from './deposit-branch.service';

describe('DepositBranchService', () => {
  let service: DepositBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
