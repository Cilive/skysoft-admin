import { TestBed } from '@angular/core/testing';

import { PumpEmployeeService } from './pump-employee.service';

describe('PumpEmployeeService', () => {
  let service: PumpEmployeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PumpEmployeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
