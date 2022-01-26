import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsOutComponent } from './payments-out.component';

describe('PaymentsOutComponent', () => {
  let component: PaymentsOutComponent;
  let fixture: ComponentFixture<PaymentsOutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsOutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
