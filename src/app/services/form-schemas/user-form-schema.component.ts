import { OnInit, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/app/models/user.model';
import { BaseFormSchema } from './base-form-schema';
import { FormSchema } from '../../components/dynamic-form/dynamic-form.component';

@Injectable()
export class UserFormSchemaService extends BaseFormSchema implements OnInit {
  public user$ : Observable<UserDto>;
  public schema$: Observable<FormSchema>;

  constructor() { 
    super();
    this.onSave$.pipe(
      // TODO save here
    ).subscribe(d => console.log('save'));

    this.onDelete$.pipe(
      //TODO delete here
    ).subscribe(d => console.log('delete'));

    this.user$ = of({
      email: 'test',
      firstName: 'jake',
      lastName: 'leveroni',
      username: 'jleveroni'
    } as UserDto)

    this.schema$ = of({
      title: 'User',
      subtitle: 'Manage User Info',
      style: "outline",
      inputs: [
        [
          {
            key: 'id',
            label: 'User Id',
            placeholder: 'The users unique id',
            displayField: 'id'
          },
        ],
        [
          {
            key: 'first',
            label: 'First Name',
            placeholder: 'John',
            displayField: 'firstName'
          },
          {
            key: 'last',
            label: 'Last Name',
            placeholder: 'Doe',
            displayField: 'lastName'
          },
        ],
        [
          {
            key: 'email',
            label: 'Email Address',
            placeholder: 'johndoe@example.com',
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
