import { Component, Input } from '@angular/core';
import { SurveyQuestionComponent } from '../base-question.component';
import { SingleChoiceQuestion, Choice } from '../../models/single-choice-question.model';

@Component({
  selector: 'app-single-choice-question',
  templateUrl: './single-choice-question.component.html',
  styleUrls: ['./single-choice-question.component.scss']
})
export class SingleChoiceQuestionComponent extends SurveyQuestionComponent {  
  @Input() protected question: SingleChoiceQuestion;

  constructor() {
    super();
   }

  protected answer(answer: Choice): void {
    this.question.answer = answer;
  }

  protected validate(): boolean {
    return (this.question.answer && this.question.choices.find(q => q.label === this.question.answer.label) !== null);
  }

  protected clear(): void {
    this.question.answer = null;
  }
}
