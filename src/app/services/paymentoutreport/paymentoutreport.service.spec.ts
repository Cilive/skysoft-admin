import { TestBed } from '@angular/core/testing';

import { PaymentoutreportService } from './paymentoutreport.service';

describe('PaymentoutreportService', () => {
  let service: PaymentoutreportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentoutreportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
