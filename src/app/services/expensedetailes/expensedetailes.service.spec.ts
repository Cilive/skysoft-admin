import { TestBed } from '@angular/core/testing';

import { ExpensedetailesService } from './expensedetailes.service';

describe('ExpensedetailesService', () => {
  let service: ExpensedetailesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpensedetailesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
