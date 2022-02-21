import { TestBed } from '@angular/core/testing';

import { PurchaseInReportBranchService } from './purchase-in-report-branch.service';

describe('PurchaseInReportBranchService', () => {
  let service: PurchaseInReportBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurchaseInReportBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
