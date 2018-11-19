import { SurveyQuestion } from "./survey-question.model";

export interface SingleChoiceQuestion extends SurveyQuestion {
    choices: Array<Choice>;
    answer?: Choice;
}

export class Choice {
    label: string;
    value: string;
}