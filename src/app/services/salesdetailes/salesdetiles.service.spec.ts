import { TestBed } from '@angular/core/testing';

import { SalesdetilesService } from './salesdetiles.service';

describe('SalesdetilesService', () => {
  let service: SalesdetilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesdetilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
