import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextQuestionFormComponent } from './text-question-form.component';

describe('TextQuestionFormComponent', () => {
  let component: TextQuestionFormComponent;
  let fixture: ComponentFixture<TextQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
