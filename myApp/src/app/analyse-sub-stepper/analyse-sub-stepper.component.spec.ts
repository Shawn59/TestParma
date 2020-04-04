import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseSubStepperComponent } from './analyse-sub-stepper.component';

describe('AnalyseSubStepperComponent', () => {
  let component: AnalyseSubStepperComponent;
  let fixture: ComponentFixture<AnalyseSubStepperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseSubStepperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseSubStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
