import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SingleChoiceQuestion, Choice } from '../../../models/single-choice-question.model';

@Component({
  selector: 'app-single-question-form',
  templateUrl: './single-question-form.component.html',
  styleUrls: ['./single-question-form.component.scss']
})
export class SingleQuestionFormComponent implements OnInit, OnDestroy {
  public question: SingleChoiceQuestion;
  @Input() onSave$: Subject<boolean> = new Subject();
  public onDestroy$: Subject<void> = new Subject();
  @Output() saveEvent$ = new EventEmitter<SingleChoiceQuestion>();

  constructor() {
    this.question = {
      choices: [{
        label: null,
        value: null
      }],
      key: null,
      questionType: 'single-choice',
      optional: false,
      questionString: null
    }
  }

  ngOnInit() {
    this.onSave$.pipe(
      tap((d) => {
        this.saveEvent$.emit(this.question)}
      ),
      takeUntil(this.onDestroy$),
    ).subscribe();
  }

  public addChoice() {
    this.question.choices.push({
      label: null,
      value: null
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
