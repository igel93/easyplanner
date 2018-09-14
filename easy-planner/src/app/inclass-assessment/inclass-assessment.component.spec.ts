import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InclassAssessmentComponent } from './inclass-assessment.component';

describe('InclassAssessmentComponent', () => {
  let component: InclassAssessmentComponent;
  let fixture: ComponentFixture<InclassAssessmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InclassAssessmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InclassAssessmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
