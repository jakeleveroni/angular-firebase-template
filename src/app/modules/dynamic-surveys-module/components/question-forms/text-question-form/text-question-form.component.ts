import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { TextResponseQuestion } from '../../../models/text-response-question.model';

@Component({
  selector: 'app-text-question-form',
  templateUrl: './text-question-form.component.html',
  styleUrls: ['./text-question-form.component.scss']
})
export class TextQuestionFormComponent implements OnInit, OnDestroy {
  public question: TextResponseQuestion;
  @Input() onSave$: Subject<string> = new Subject();
  public onDestroy$: Subject<void> = new Subject();
  @Output() saveEvent$ = new EventEmitter<TextResponseQuestion>();

  constructor() { 
    this.question = {
      key: null,
      optional: false,
      questionString: null,
      questionType: 'text-response'
    }
  }

  ngOnInit() {
    this.onSave$.pipe(
      tap(() => this.saveEvent$.emit(this.question)),
      takeUntil(this.onDestroy$),
    ).subscribe();
  }

  public ngOnDestroy() {
    this.onDestroy$.next(void 0);
  }
}
