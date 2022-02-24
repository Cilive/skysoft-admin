import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransacionsComponent } from './transacions.component';

describe('TransacionsComponent', () => {
  let component: TransacionsComponent;
  let fixture: ComponentFixture<TransacionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransacionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransacionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
