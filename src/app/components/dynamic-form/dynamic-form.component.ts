import { Component, OnInit, Input } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() formSchema$: Observable<FormSchema>; 
  @Input() formModel$: Observable<any>;
  @Input() saveSubject$: Subject<boolean>;
  @Input() deleteSubject$: Subject<boolean>;

  constructor() { }

  ngOnInit() {
    this.formSchema$.pipe(
      take(1)
    ).subscribe(s => s.inputs.forEach(x => {
        if (x.length > 4) {
          throw new Error('Invalid form schema, no more than 4 inputs per');
        }
      })
    );
  }

  public getInputByKey(key: string) {
    return this.formSchema$.pipe(
      map((schema: Array<FormInputSchema[]>) => {
        const inputs: FormInputSchema[] = [].concat(...schema);
        return inputs.find(x => x.key === key);
      })
    );
  }
}

export interface FormSchema {
  title: string,
  subtitle?: string;
  inputs: Array<FormInputSchema[]>
  style: string;
}

export interface FormInputSchema {
  label?: string;
  placeholder?: string;
  key: string;
  displayField: string;
}
