import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountsLadgerBranchComponent } from './accounts-ladger-branch.component';

describe('AccountsLadgerBranchComponent', () => {
  let component: AccountsLadgerBranchComponent;
  let fixture: ComponentFixture<AccountsLadgerBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountsLadgerBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountsLadgerBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
