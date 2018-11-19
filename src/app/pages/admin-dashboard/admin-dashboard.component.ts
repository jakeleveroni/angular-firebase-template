import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { SideMenuOption } from 'src/app/components/editor/editor.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
  public editorOptions$: Observable<SideMenuOption[]>;

  constructor() {
    this.editorOptions$ = of([
      {
        route: 'users',
        iconName: 'people',
        displayName: 'Manage Users',
        subMenuOps: [
          {
            route: 'create',
            iconName: 'group_add',
            displayName: 'Create Users',
          }
        ]
      },
      {
        route: 'surveys',
        iconName: 'people',
        displayName: 'Manage Surveys',
        subMenuOps: [
          {
            route: 'create',
            iconName: 'group_add',
            displayName: 'Create New Survey',
          }
        ]
      },
    ])
  }

  ngOnInit() {
  }

}
