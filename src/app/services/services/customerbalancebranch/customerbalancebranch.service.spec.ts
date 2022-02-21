import { TestBed } from '@angular/core/testing';

import { CustomerbalancebranchService } from './customerbalancebranch.service';

describe('CustomerbalancebranchService', () => {
  let service: CustomerbalancebranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerbalancebranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
