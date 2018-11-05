import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import {ContestantDto} from './../../models/contestant.model';

@Component({
  selector: 'app-main-billboard',
  templateUrl: './main-billboard.component.html',
  styleUrls: ['./main-billboard.component.css']
})
export class MainBillboardComponent implements OnInit {
  public contestants$: Observable<ContestantDto>;

  constructor() { }

  ngOnInit() {
  }

}
