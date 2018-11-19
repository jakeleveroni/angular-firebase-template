import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { UserDataService } from 'src/app/services/data-services/user-data.service';
import { UserDto } from 'src/app/models/user.model';
import { takeUntil } from 'rxjs/operators';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users$: Observable<UserDto[]>;
  private onDestroy$: Subject<void>;

  constructor(private userDataServ: UserDataService, private router: Router, private route: ActivatedRoute) {
    this.onDestroy$ = new Subject();
  }

  public viewUser(user: UserDto) {
    // @TODO
    // this.router.navigate([user.id], {relativeTo: this.route}).catch(err => console.log(`[ROUTER ERR]: ${err}`))
  }

  ngOnInit() {
    this.users$ = this.userDataServ.get().pipe(
      takeUntil(this.onDestroy$)
    );
  }

  ngOnDestroy() {
    this.onDestroy$.next(void 0);
  }
}
