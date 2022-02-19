import { TestBed } from '@angular/core/testing';

import { SalesinvoiceService } from './salesinvoice.service';

describe('SalesinvoiceService', () => {
  let service: SalesinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
