import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashSalesSummeryComponent } from './cash-sales-summery.component';

describe('CashSalesSummeryComponent', () => {
  let component: CashSalesSummeryComponent;
  let fixture: ComponentFixture<CashSalesSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashSalesSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashSalesSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
