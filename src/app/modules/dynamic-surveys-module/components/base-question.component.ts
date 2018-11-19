import { Input } from "@angular/core";
import { SurveyQuestion } from "../models/survey-question.model";

export abstract class SurveyQuestionComponent {
    @Input() protected question: SurveyQuestion;

    protected constructor() {        
    }

    protected abstract answer(answer: any): void;
    protected abstract validate(): boolean;
    protected abstract clear(): void;
}