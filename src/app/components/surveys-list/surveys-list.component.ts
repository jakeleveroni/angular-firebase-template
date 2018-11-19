import { Component, OnInit, OnDestroy } from '@angular/core';
import { SurveyDto } from 'src/app/modules/dynamic-surveys-module/models/survey.model';
import { Subject, Observable } from 'rxjs';
import { SurveyDataService } from 'src/app/services/data-services/survey-data.service';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.css']
})
export class SurveysListComponent implements OnInit, OnDestroy {
  public surveys$: Observable<SurveyDto[]>;
  private onDestroy$: Subject<void>;

  constructor(private surveyDataServ: SurveyDataService, private router: Router, private route: ActivatedRoute) {
    this.onDestroy$ = new Subject();
  }

  public viewSurvey(survey: SurveyDto) {
    // @TODO
    // this.router.navigate([survey.id], {relativeTo: this.route}).catch(err => console.log(`[ROUTER ERR]: ${err}`))
  }

  ngOnInit() {
    this.surveys$ = this.surveyDataServ.get().pipe(
      takeUntil(this.onDestroy$)
    )
  }

  ngOnDestroy() {
    this.onDestroy$.next(void 0);
  }

}
