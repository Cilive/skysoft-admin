import { TestBed } from '@angular/core/testing';

import { FueldataService } from './fueldata.service';

describe('FueldataService', () => {
  let service: FueldataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FueldataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
