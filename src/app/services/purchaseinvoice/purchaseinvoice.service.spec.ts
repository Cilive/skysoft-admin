import { TestBed } from '@angular/core/testing';

import { PurchaseinvoiceService } from './purchaseinvoice.service';

describe('PurchaseinvoiceService', () => {
  let service: PurchaseinvoiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseinvoiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
