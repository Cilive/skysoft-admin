import { TestBed } from '@angular/core/testing';

import { PurchaseDetailesBranchService } from './purchase-detailes-branch.service';

describe('PurchaseDetailesBranchService', () => {
  let service: PurchaseDetailesBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseDetailesBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
