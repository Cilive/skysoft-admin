import { TestBed } from '@angular/core/testing';

import { InvoicelistingService } from './invoicelisting.service';

describe('InvoicelistingService', () => {
  let service: InvoicelistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvoicelistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
