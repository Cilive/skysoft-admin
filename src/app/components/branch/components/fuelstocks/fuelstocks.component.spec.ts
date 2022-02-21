import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelstocksComponent } from './fuelstocks.component';

describe('FuelstocksComponent', () => {
  let component: FuelstocksComponent;
  let fixture: ComponentFixture<FuelstocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FuelstocksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelstocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
