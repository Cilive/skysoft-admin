import { TestBed } from '@angular/core/testing';

import { DepositamountService } from './depositamount.service';

describe('DepositamountService', () => {
  let service: DepositamountService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DepositamountService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
