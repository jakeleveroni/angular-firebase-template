import { Component } from '@angular/core';
import { UserDto, UserModel } from 'src/app/models/user.model';
import { ActivatedRoute, Params } from '@angular/router';
import { take, switchMap } from 'rxjs/operators';
import { UserDataService } from 'src/app/services/data-services/user-data.service';
import { of, Observable } from 'rxjs';
import { UserFormSchemaService } from 'src/app/services/form-schemas/user-form-schema.component';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent {
  public user$: Observable<UserDto>;
  constructor(private schemaServ: UserFormSchemaService, private userDataServ: UserDataService, private route: ActivatedRoute) {
    this.user$ = this.route.params.pipe(
      take(1),
      switchMap((params: Params) => {
        if (params['id']) {
          return this.userDataServ.getOne(params['id']);
        } else {
          return of(UserModel.emptyDto())
        }
      })
    );
  }
}
