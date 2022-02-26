import { TestBed } from '@angular/core/testing';

import { AccountLadgerOtpService } from './account-ladger-otp.service';

describe('AccountLadgerOtpService', () => {
  let service: AccountLadgerOtpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccountLadgerOtpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
