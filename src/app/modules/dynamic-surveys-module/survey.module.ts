import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { SingleChoiceQuestionComponent } from './components/single-choice-question/single-choice-question.component';
import { MatFormFieldModule, MatRadioModule, MatCheckboxModule, MatInputModule, MatCardModule, MatButtonModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextResponseQuestionComponent } from './components/text-response-question/text-response-question.component';
import { MultiChoiceQuestionComponent } from './components/multi-choice-question/multi-choice-question.component';
import { MultiQuestionFormComponent } from './components/question-forms/multi-question-form/multi-question-form.component';
import { SingleQuestionFormComponent } from './components/question-forms/single-question-form/single-question-form.component';
import { TextQuestionFormComponent } from './components/question-forms/text-question-form/text-question-form.component';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatCheckboxModule,
      MatRadioModule,
      MatInputModule,
      MatCardModule,
      MatButtonModule
    ],
    declarations: [
      SingleChoiceQuestionComponent,
      MultiChoiceQuestionComponent,
      TextResponseQuestionComponent,
      MultiQuestionFormComponent,
      SingleQuestionFormComponent,
      TextQuestionFormComponent
    ],
    providers: [

    ],
    exports: [
      SingleChoiceQuestionComponent,
      MultiChoiceQuestionComponent,
      TextResponseQuestionComponent,
      MultiQuestionFormComponent,
      SingleQuestionFormComponent,
      TextQuestionFormComponent
    ],
    entryComponents:[
      SingleChoiceQuestionComponent,
      MultiChoiceQuestionComponent,
      TextResponseQuestionComponent,
      MultiQuestionFormComponent,
      SingleQuestionFormComponent,
      TextQuestionFormComponent
    ],
  })
  export class DynamicSurveyModule { }