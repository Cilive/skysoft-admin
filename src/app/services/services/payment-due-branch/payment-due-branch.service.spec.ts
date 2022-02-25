import { TestBed } from '@angular/core/testing';

import { PaymentDueBranchService } from './payment-due-branch.service';

describe('PaymentDueBranchService', () => {
  let service: PaymentDueBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDueBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
