import { TestBed } from '@angular/core/testing';

import { PurchasedetailesService } from './purchasedetailes.service';

describe('PurchasedetailesService', () => {
  let service: PurchasedetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchasedetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
