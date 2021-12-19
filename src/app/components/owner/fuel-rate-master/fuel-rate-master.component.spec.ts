import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelRateMasterComponent } from './fuel-rate-master.component';

describe('FuelRateMasterComponent', () => {
  let component: FuelRateMasterComponent;
  let fixture: ComponentFixture<FuelRateMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelRateMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelRateMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
