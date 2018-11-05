import { Component, OnInit } from '@angular/core';
import { ContestentFormSchemaService } from 'src/app/services/form-schemas/contestent-form-schema.component';

@Component({
  selector: 'app-contestant-manager',
  templateUrl: './contestant-manager.component.html',
  styleUrls: ['./contestant-manager.component.css']
})
export class ContestantManagerComponent implements OnInit {

  constructor(public contestantSchema: ContestentFormSchemaService) { }

  ngOnInit() {
  }

}
