import { Component, OnInit } from '@angular/core';
import { UserFormSchemaService } from 'src/app/services/form-schemas/user-form-schema.component';
import { Observable, of } from 'rxjs';
import { UserDto } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent {
  constructor(private userSchema: UserFormSchemaService) {
  }
}
