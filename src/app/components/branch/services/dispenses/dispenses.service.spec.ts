import { TestBed } from '@angular/core/testing';

import { DispensesService } from './dispenses.service';

describe('DispensesService', () => {
  let service: DispensesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DispensesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
