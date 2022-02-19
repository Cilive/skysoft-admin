import { TestBed } from '@angular/core/testing';

import { PaymentinreportService } from './paymentinreport.service';

describe('PaymentinreportService', () => {
  let service: PaymentinreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentinreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
