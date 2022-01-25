import { TestBed } from '@angular/core/testing';

import { CashmasterService } from './cashmaster.service';

describe('CashmasterService', () => {
  let service: CashmasterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashmasterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
