import { SurveyQuestion } from "./survey-question.model";
import { Choice } from "./single-choice-question.model";

export interface MultiChoiceQuestion extends SurveyQuestion {
    choices: Choice[];
    answer?: Choice[];
}