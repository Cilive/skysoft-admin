import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FulestockComponent } from './fulestock.component';

describe('FulestockComponent', () => {
  let component: FulestockComponent;
  let fixture: ComponentFixture<FulestockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FulestockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FulestockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
