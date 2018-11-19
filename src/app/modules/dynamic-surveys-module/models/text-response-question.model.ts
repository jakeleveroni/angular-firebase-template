import { SurveyQuestion } from "./survey-question.model";

export interface TextResponseQuestion extends SurveyQuestion {
    answer?: string;
}
