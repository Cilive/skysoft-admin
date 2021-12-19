import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAccountMasterComponent } from './bank-account-master.component';

describe('BankAccountMasterComponent', () => {
  let component: BankAccountMasterComponent;
  let fixture: ComponentFixture<BankAccountMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BankAccountMasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAccountMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
