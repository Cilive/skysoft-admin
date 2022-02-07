import { TestBed } from '@angular/core/testing';

import { CustomerbalanceService } from './customerbalance.service';

describe('CustomerbalanceService', () => {
  let service: CustomerbalanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerbalanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
