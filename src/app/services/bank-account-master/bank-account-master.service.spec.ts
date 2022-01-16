import { TestBed } from '@angular/core/testing';

import { BankAccountMasterService } from './bank-account-master.service';

describe('BankAccountMasterService', () => {
  let service: BankAccountMasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BankAccountMasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
