import { TestBed } from '@angular/core/testing';

import { MeterReadigService } from './meter-readig.service';

describe('MeterReadigService', () => {
  let service: MeterReadigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterReadigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
