import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { BaseDataService } from "./base-data.service";
import { FirestoreService } from "../firestore/firestore.service";
import { SurveyDto } from "src/app/modules/dynamic-surveys-module/models/survey.model";

@Injectable()
export class SurveyDataService extends BaseDataService<SurveyDto> {
    constructor(private firestore: FirestoreService) {
        super('surveys');
    }

    public get(): Observable<SurveyDto[]> {
        return this.firestore.get<SurveyDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<SurveyDto> {
        return this.firestore.getOne<SurveyDto>(this.baseCollection, id);
    }

    public update(data: Partial<SurveyDto>): Promise<void> {
        return this.firestore.update<SurveyDto>(this.baseCollection, data.id, data);
    }

    public delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: SurveyDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }
}