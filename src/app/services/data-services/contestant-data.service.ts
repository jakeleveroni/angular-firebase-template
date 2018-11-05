import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { BaseDataService } from "./base-data.service";
import { ContestantDto } from '../../models/contestant.model';
import { FirestoreService } from "../firestore/firestore.service";

@Injectable()
export class ContestentDataService extends BaseDataService<ContestantDto> {
    constructor(private firestore: FirestoreService) {
        super('contestents');
    }

    public get(): Observable<ContestantDto[]> {
        return this.firestore.get<ContestantDto>(this.baseCollection);
    }

    public getOne(id: string): Observable<ContestantDto> {
        return this.firestore.getOne<ContestantDto>(this.baseCollection, id);
    }

    public update(data: Partial<ContestantDto>): Promise<void> {
        return this.firestore.update<ContestantDto>(this.baseCollection, data.id, data);
    }

    public _delete(id: string): Promise<any> {
        return this.firestore.delete(this.baseCollection, id);
    }
    
    public create(data: ContestantDto): Promise<void> {
        return this.firestore.create(this.baseCollection, data);
    }
}