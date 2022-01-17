import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockManegmentComponent } from './stock-manegment.component';

describe('StockManegmentComponent', () => {
  let component: StockManegmentComponent;
  let fixture: ComponentFixture<StockManegmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockManegmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockManegmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
