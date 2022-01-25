import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashmasterComponent } from './cashmaster.component';

describe('CashmasterComponent', () => {
  let component: CashmasterComponent;
  let fixture: ComponentFixture<CashmasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashmasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashmasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
