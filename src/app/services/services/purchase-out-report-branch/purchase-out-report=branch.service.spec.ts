import { TestBed } from '@angular/core/testing';

import { PurchaseOutReport=branchService } from './purchase-out-report=branch.service';

describe('PurchaseOutReport=branchService', () => {
  let service: PurchaseOutReport=branchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseOutReport=branchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
