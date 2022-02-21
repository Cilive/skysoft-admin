import { TestBed } from '@angular/core/testing';

import { PaymentDueService } from './payment-due.service';

describe('PaymentDueService', () => {
  let service: PaymentDueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
