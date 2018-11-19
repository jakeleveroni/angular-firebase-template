import { Component, OnInit, Input, OnDestroy, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { isEqual } from 'lodash';
import { MultiChoiceQuestion } from '../../../models/multi-choice-question.model';
import { Choice } from '../../../models/single-choice-question.model';

@Component({
  selector: 'app-multi-question-form',
  templateUrl: './multi-question-form.component.html',
  styleUrls: ['./multi-question-form.component.scss']
})
export class MultiQuestionFormComponent implements OnInit, OnDestroy {
  public question: MultiChoiceQuestion;
  @Input() onSave$: Subject<any> = new Subject();
  public onDestroy$: Subject<void> = new Subject();
  @Output() saveEvent$ = new EventEmitter<MultiChoiceQuestion>();

  constructor() {
    this.question = {
      key: null,
      optional: false,
      questionString: null,
      questionType: 'multi-choice',
      choices: [{
        label: '',
        value: ''
      }]
    };
  }

  ngOnInit() {
    this.onSave$.pipe(
      tap(() => this.saveEvent$.emit(this.question)),
      takeUntil(this.onDestroy$),
    ).subscribe();
  }

  public addChoice() {
    this.question.choices.push({
      label: 'test add',
      value: ''
    })
  }

  public removeChoice(choice: Choice) {
    const index = this.question.choices.findIndex(x => x.label === choice.label);
    this.question.choices.splice(index, 1);
  }

  public ngOnDestroy() {
    this.onDestroy$.next(void 0);
  }
}
