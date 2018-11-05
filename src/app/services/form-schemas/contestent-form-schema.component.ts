import { OnInit, Injectable } from '@angular/core';
import { BaseFormSchema } from './base-form-schema';
import { Observable, of } from 'rxjs';
import { FormSchema } from 'src/app/components/dynamic-form/dynamic-form.component';
import { ContestantDto } from 'src/app/models/contestant.model';

@Injectable()
export class ContestentFormSchemaService extends BaseFormSchema implements OnInit {
  public contestant$ : Observable<ContestantDto>;
  public schema$: Observable<FormSchema>;

  constructor() { 
    super();

    this.onSave$.pipe(
      // TODO save here
    ).subscribe(d => console.log('save'));

    this.onDelete$.pipe(
      //TODO delete here
    ).subscribe(d => console.log('delete'));

    this.contestant$ = of({
      email: 'test',
      firstName: 'jake',
      lastName: 'leveroni',
      username: 'jleveroni'
    } as ContestantDto)

    this.schema$ = of({
      title: 'Contestent',
      subtitle: 'Manage Contestent Info',
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
        ],
        [
          {
            key: 'youtube',
            label: 'Youtube Channel',
            placeholder: 'https://youtube.com/jleveroni',
            displayField: 'youtubeHandle'
          },
          {
            key: 'facebook',
            label: 'Facebook Page',
            placeholder: 'https://facebook.com/jleveroni/wsawfr9gf2',
            displayField: 'facebookHandle'
          },
        ],
        [
          {
            key: 'twitter',
            label: 'Twitter Handle',
            placeholder: '@jleveroni',
            displayField: 'twitterHandle'
          },
          {
            key: 'instagram',
            label: 'Instagram Handle',
            placeholder: 'one_pepperoni',
            displayField: 'instagramHandle'
          },
        ],
        [
          {
            key: 'bio',
            label: 'About',
            placeholder: 'Information about yourself',
            displayField: 'bio'
          }
        ],
      ]
    });
  }

  ngOnInit() {
  }

  public save() {
    throw new Error("Method not implemented.");
  }
  public delete() {
    throw new Error("Method not implemented.");
  }
  public validate(): boolean {
    throw new Error("Method not implemented.");
  }
}
