import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyOwnerComponent } from './company-owner.component';

describe('CompanyOwnerComponent', () => {
  let component: CompanyOwnerComponent;
  let fixture: ComponentFixture<CompanyOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyOwnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
