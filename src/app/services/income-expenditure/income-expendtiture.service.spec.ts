import { TestBed } from '@angular/core/testing';

import { IncomeExpendtitureService } from './income-expendtiture.service';

describe('IncomeExpendtitureService', () => {
  let service: IncomeExpendtitureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeExpendtitureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
