import { BaseDatabaseModel } from "src/app/models/base-dto.model";
import { AngularFirestore } from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class FirestoreService {
    constructor(public store: AngularFirestore) {

    }

    public create<T extends BaseDatabaseModel>(collection: string, data: T): Promise<void> {
        return this.store.doc<T>(`${collection}/${data.id}`).set(data);
    }

    public get<T extends BaseDatabaseModel>(collection: string): Observable<T[]> {
        return this.store.collection<T>(collection).valueChanges();
    }

    public getOne<T extends BaseDatabaseModel>(collection: string, id: string): Observable<T> {
        return this.store.doc<T>(`${collection}/${id}`).valueChanges();
    }

    public update<T extends BaseDatabaseModel>(collection: string, id: string, document: Partial<T>): Promise<void> {
        return this.store.doc<T>(`${collection}/${id}`).update(document);
    }

    public runQuery<T extends BaseDatabaseModel>(collection: string, query: FirestoreQuery): Observable<T[]> {
        return this.store.collection<T>(collection, ref => ref.where(query.field, query.operation, query.searchKey)).valueChanges();
    }

    public delete<T extends BaseDatabaseModel>(collection: string, id: string): Promise<any> {
        return this.store.doc<T>(`${collection}/${id}`).delete();
    }
}

export interface FirestoreQuery {
    field: string,
    operation: firebase.firestore.WhereFilterOp
    searchKey: string
}