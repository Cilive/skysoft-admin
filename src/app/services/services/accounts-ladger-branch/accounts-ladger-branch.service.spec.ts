import { TestBed } from '@angular/core/testing';

import { AccountsLadgerBranchService } from './accounts-ladger-branch.service';

describe('AccountsLadgerBranchService', () => {
  let service: AccountsLadgerBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountsLadgerBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
