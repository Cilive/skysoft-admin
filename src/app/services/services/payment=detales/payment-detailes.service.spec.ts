import { TestBed } from '@angular/core/testing';

import { PaymentDetailesService } from './payment-detailes.service';

describe('PaymentDetailesService', () => {
  let service: PaymentDetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentDetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
