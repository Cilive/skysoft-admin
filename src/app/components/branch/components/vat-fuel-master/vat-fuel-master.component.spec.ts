import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VatFuelMasterComponent } from './vat-fuel-master.component';

describe('VatFuelMasterComponent', () => {
  let component: VatFuelMasterComponent;
  let fixture: ComponentFixture<VatFuelMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VatFuelMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VatFuelMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
