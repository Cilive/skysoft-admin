import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PumpEmployeeComponent } from './pump-employee.component';

describe('PumpEmployeeComponent', () => {
  let component: PumpEmployeeComponent;
  let fixture: ComponentFixture<PumpEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PumpEmployeeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PumpEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
