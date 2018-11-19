import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { SurveyQuestionComponent } from '../base-question.component';
import { MultiChoiceQuestion } from '../../models/multi-choice-question.model';

@Component({
  selector: 'app-multi-choice-question',
  templateUrl: './multi-choice-question.component.html',
  styleUrls: ['./multi-choice-question.component.scss']
})
export class MultiChoiceQuestionComponent extends SurveyQuestionComponent implements OnInit {
  @Input() question: MultiChoiceQuestion;
  public choices: {label: string, value: string, checked: boolean}[] = []

  constructor() {
    super();
  }

  ngOnInit() {
    this.choices = this.question.choices.map(a => { 
      return {
        label: a.label, 
        value: a.value,
        checked: false 
      }
    })
  }

  protected answer(answer: any): void {
    this.question.answer = this.choices.filter(x => x.checked);
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

  public debug() {
    console.log(this.choices);
  }
}
