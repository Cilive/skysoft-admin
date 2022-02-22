import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionreportComponent } from './sessionreport.component';

describe('SessionreportComponent', () => {
  let component: SessionreportComponent;
  let fixture: ComponentFixture<SessionreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
