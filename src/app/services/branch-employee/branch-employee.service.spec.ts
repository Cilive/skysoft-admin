import { TestBed } from '@angular/core/testing';

import { BranchEmployeeService } from './branch-employee.service';

describe('BranchEmployeeService', () => {
  let service: BranchEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BranchEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
