import { TestBed } from '@angular/core/testing';

import { PaymentdueService } from './paymentdue.service';

describe('PaymentdueService', () => {
  let service: PaymentdueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentdueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
