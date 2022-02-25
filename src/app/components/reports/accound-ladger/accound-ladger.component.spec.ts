import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccoundLadgerComponent } from './accound-ladger.component';

describe('AccoundLadgerComponent', () => {
  let component: AccoundLadgerComponent;
  let fixture: ComponentFixture<AccoundLadgerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccoundLadgerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccoundLadgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
