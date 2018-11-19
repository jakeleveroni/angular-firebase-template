import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiQuestionFormComponent } from './multi-question-form.component';

describe('MultiQuestionFormComponent', () => {
  let component: MultiQuestionFormComponent;
  let fixture: ComponentFixture<MultiQuestionFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiQuestionFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
