import { SurveyQuestion } from "./survey-question.model";
import { BaseDatabaseModel, BaseDto } from "../../../models/base-dto.model";
import { UUID } from "angular2-uuid";

export class SurveyModel extends BaseDatabaseModel {
    public title: string;
    public image?: string;
    public blurb: string;
    public story?: string;
    public questions: Array<SurveyQuestion>;

    constructor(id: string, title: string, blurb: string, questions: Array<SurveyQuestion>, story?: string, image?: string) {
        super();
        this.id = id;
        this.title = title;
        this.blurb = blurb;
        this.questions = questions;
        this.story = story;
        this.image = image;
    }

    public static fromDto(survey: SurveyDto) {
        return new SurveyModel(survey.id, survey.title, survey.blurb, survey.questions, survey.story, survey.image);
    }

    public toDto(): SurveyDto {
        return {
            id: this.id,
            title: this.title,
            image: this.image,
            blurb: this.blurb,
            story: this.story,
            questions: this.questions
        };
    }

    public addQuestion(question: SurveyQuestion) {
        this.questions.push(question);
    }

    public removeQuestion(question: SurveyQuestion) {
        const index = this.questions.findIndex(x => x.key === question.key);
        this.questions = this.questions.splice(index, 1);
    }

    public static emptySurvey(): SurveyModel {
        return new SurveyModel(UUID.UUID(), null, null, [], null, null);
    }
}

export interface SurveyDto extends BaseDto{
    title: string;
    image?: string;
    blurb: string;
    story?: string;
    questions: Array<SurveyQuestion>;
}