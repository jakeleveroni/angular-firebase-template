import { OnInit, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/app/models/user.model';
import { BaseFormSchema } from './base-form-schema';
import { FormSchema } from '../../components/dynamic-form/dynamic-form.component';
import { tap, switchMap } from 'rxjs/operators';

@Injectable()
export class UserFormSchemaService extends BaseFormSchema implements OnInit {
  public user$ : Observable<UserDto>;
  public schema$: Observable<FormSchema>;

  constructor() { 
    super();
    this.onSave$.pipe(
    ).subscribe(d => console.log('save', d));

    this.onDelete$.pipe(
      //TODO delete here
    ).subscribe(d => console.log('delete', d));

    this.schema$ = of({
      title: 'User',
      subtitle: 'Manage User Info',
      style: "outline",
      inputs: [
        [
          {
            key: 'id',
            label: 'User Id',
            displayField: 'id'
          },
        ],
        [
          {
            key: 'first',
            label: 'First Name',
            displayField: 'firstName'
          },
          {
            key: 'last',
            label: 'Last Name',
            displayField: 'lastName'
          },
        ],
        [
          {
            key: 'email',
            label: 'Email Address',
            displayField: 'email'
          }
        ]
      ]
    });
  }

  ngOnInit() {
  }

  public save(): void {
    this.onSave$.next(true);
  }
  public delete(): void {
    this.onDelete$.next(true);
  }

  public validate(): boolean {
    return false;
  }
}
