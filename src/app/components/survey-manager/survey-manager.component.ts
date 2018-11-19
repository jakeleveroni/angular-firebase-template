import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, EMPTY } from 'rxjs';
import { takeUntil, tap, concatMap } from 'rxjs/operators';
import { SurveyQuestion } from '../../modules/dynamic-surveys-module/models/survey-question.model';
import { UUID } from 'angular2-uuid';
import { SurveyModel } from '../../modules/dynamic-surveys-module/models/survey.model';
import { SurveyDataService } from 'src/app/services/data-services/survey-data.service';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-survey-manager',
  templateUrl: './survey-manager.component.html',
  styleUrls: ['./survey-manager.component.css'],
})
export class SurveyManagerComponent implements OnInit, OnDestroy {
  public survey: SurveyModel;
  public newQuestions: Array<SurveyQuestion>;
  public currentlyEditedQuestion: SurveyQuestion;
  private onSave$: Subject<boolean> = new Subject();
  private onDestroy$: Subject<void> = new Subject();
  public questionSave$ = new Subject<{question: SurveyQuestion, index: number}>();

  public formTemplates: {
    single: any,
    multiple: any,
    text: any
  };

  constructor(private surveyDataServ: SurveyDataService, private loadingServ: LoadingService) {
    this.survey = SurveyModel.emptySurvey();

    this.newQuestions = [];

    this.questionSave$.pipe(
      takeUntil(this.onDestroy$),
      concatMap((questionInfo: {question: SurveyQuestion, index: number}) => {
        // normalize the question properties add incoming question to the survey questions
        if (questionInfo.question['choices']) {
          questionInfo.question['choices'] = questionInfo.question['choices'].map(x => {
            return {
              label: x.label, 
              value: x.label.toLowerCase().split('').join('_')
            }
          });
        }
        questionInfo.question.key = `choice_${questionInfo.index}`;
        this.survey.questions.splice(questionInfo.index, 0, questionInfo.question);

        // Once all questions info has been added to the survey model save it
        if (this.survey.questions.length === this.newQuestions.length) {
          if (!this.validateSurveyStructure(this.survey)) {
            // @TODO add toast for invalid error message  
            return EMPTY;
          }

          this.surveyDataServ.create(this.survey.toDto())
            .then(res => {
              this.newQuestions = [];
              this.survey =  SurveyModel.emptySurvey();
            })
            .catch(err => {
              console.error(`Could not save survey ${err}`)
            })
            .then(() => this.loadingServ.dismissLoading());
        }

        return EMPTY;
      }),
    ).subscribe()
  }

  public questionResponse($event: any, index: number) {
    this.questionSave$.next({question: $event, index});
  }

  ngOnInit() {
  }

  public addQuestion() {
    this.newQuestions.push({
      key: UUID.UUID(),
      optional: false,
      questionString: null,
      questionType: 'single-response'
    });
  }

  public ngOnDestroy() {
    this.onDestroy$.next(void 0)
  }

  public save() {
    this.loadingServ.showLoading();
    this.onSave$.next(true);
  }

  public validateSurveyStructure(survey: SurveyModel): boolean {
    // @TODO
    return true;
  }
}
