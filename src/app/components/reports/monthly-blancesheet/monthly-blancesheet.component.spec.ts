import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyBlancesheetComponent } from './monthly-blancesheet.component';

describe('MonthlyBlancesheetComponent', () => {
  let component: MonthlyBlancesheetComponent;
  let fixture: ComponentFixture<MonthlyBlancesheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyBlancesheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlyBlancesheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
