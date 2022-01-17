import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountSummeryComponent } from './bank-account-summery.component';

describe('BankAccountSummeryComponent', () => {
  let component: BankAccountSummeryComponent;
  let fixture: ComponentFixture<BankAccountSummeryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountSummeryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountSummeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
