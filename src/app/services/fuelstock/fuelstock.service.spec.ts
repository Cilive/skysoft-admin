import { TestBed } from '@angular/core/testing';

import { FuelstockService } from './fuelstock.service';

describe('FuelstockService', () => {
  let service: FuelstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FuelstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
