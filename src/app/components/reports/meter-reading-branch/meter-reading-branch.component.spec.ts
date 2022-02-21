import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeterReadingBranchComponent } from './meter-reading-branch.component';

describe('MeterReadingBranchComponent', () => {
  let component: MeterReadingBranchComponent;
  let fixture: ComponentFixture<MeterReadingBranchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeterReadingBranchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeterReadingBranchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
