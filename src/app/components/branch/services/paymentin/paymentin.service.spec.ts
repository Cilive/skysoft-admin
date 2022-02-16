import { TestBed } from '@angular/core/testing';

import { PaymentinService } from './paymentin.service';

describe('PaymentinService', () => {
  let service: PaymentinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
