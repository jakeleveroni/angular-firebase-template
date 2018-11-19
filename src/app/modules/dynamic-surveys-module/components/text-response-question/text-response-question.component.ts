import { Component, Input } from '@angular/core';
import { SurveyQuestionComponent } from '../base-question.component';
import { Choice } from '../../models/single-choice-question.model';
import { TextResponseQuestion } from '../../models/text-response-question.model';

@Component({
  selector: 'app-text-response-question',
  templateUrl: './text-response-question.component.html',
  styleUrls: ['./text-response-question.component.scss']
})
export class TextResponseQuestionComponent extends SurveyQuestionComponent {  
  @Input() protected question: TextResponseQuestion;

  constructor() {
    super();
   }

  protected answer(answer: Choice): void {
    
  }

  protected validate(): boolean {
    if (this.question.optional) {
      return true;
    }
    return !(this.question.answer || this.question.answer.length === 0);
  }

  protected clear(): void {
    this.question.answer = null;
  }
}
