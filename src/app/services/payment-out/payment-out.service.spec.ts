import { TestBed } from '@angular/core/testing';

import { PaymentOutService } from './payment-out.service';

describe('PaymentOutService', () => {
  let service: PaymentOutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentOutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
