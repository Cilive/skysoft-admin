import { TestBed } from '@angular/core/testing';

import { IncomeExpentitureBranchService } from './income-expentiture-branch.service';

describe('IncomeExpentitureBranchService', () => {
  let service: IncomeExpentitureBranchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeExpentitureBranchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
