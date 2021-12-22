import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentsInComponent } from './payments-in.component';

describe('PaymentsInComponent', () => {
  let component: PaymentsInComponent;
  let fixture: ComponentFixture<PaymentsInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentsInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentsInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
