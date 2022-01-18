import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesSummeryComponent } from './sales-summery.component';

describe('SalesSummeryComponent', () => {
  let component: SalesSummeryComponent;
  let fixture: ComponentFixture<SalesSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalesSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
