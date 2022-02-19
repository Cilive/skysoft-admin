import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicelistingComponent } from './invoicelisting.component';

describe('InvoicelistingComponent', () => {
  let component: InvoicelistingComponent;
  let fixture: ComponentFixture<InvoicelistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicelistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicelistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
