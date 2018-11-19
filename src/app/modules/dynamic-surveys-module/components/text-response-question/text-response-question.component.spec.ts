import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextResponseQuestionComponent } from './text-response-question.component';

describe('TextResponseQuestionComponent', () => {
  let component: TextResponseQuestionComponent;
  let fixture: ComponentFixture<TextResponseQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextResponseQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextResponseQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
