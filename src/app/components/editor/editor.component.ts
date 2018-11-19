import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Input() public sideMenuOps$: Observable<SideMenuOption[]>;

  constructor(private router: Router, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.sideMenuOps$.pipe(take(1)).subscribe(d => console.log(d));
  }

  public routeTo(menuOp: SideMenuOption, subOption?: SideMenuOption) {
    if (subOption) {
      this.router.navigate([menuOp.route, subOption.route], {
        relativeTo: this.route,
        queryParams: menuOp.queryParams
      }).catch(err => console.error(`could not route ${err}`));
    } else {
      this.router.navigate([menuOp.route], {
        relativeTo: this.route,
        queryParams: menuOp.queryParams
      }).catch(err => console.error(`could not route ${err}`));
    }
  }

  public onActivate(event: any) {
  }

  public onDeactivate(event: any) {
  }

}

export interface SideMenuOption {
  route: string;
  iconName?: string;
  displayName: string;
  queryParams?: any;
  subMenuOps?: SideMenuOption[]
}
