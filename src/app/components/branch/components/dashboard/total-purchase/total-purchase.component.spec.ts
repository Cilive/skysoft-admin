import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalPurchaseComponent } from './total-purchase.component';

describe('TotalPurchaseComponent', () => {
  let component: TotalPurchaseComponent;
  let fixture: ComponentFixture<TotalPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
