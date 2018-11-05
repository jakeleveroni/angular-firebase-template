import {Observable, Subject} from 'rxjs';

export abstract class BaseFormSchema {
    public onSave$: Subject<boolean> = new Subject();
    public onDelete$: Subject<boolean> = new Subject();
    
    public abstract save(): any;
    public abstract delete(): any;
    public abstract validate(): boolean;
}