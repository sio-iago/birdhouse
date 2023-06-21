import { Component } from '@angular/core';
import {ObjectivesService} from "./wingspan-objectives/objectives.service";
import {Objective} from "./shared/models/objective";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'birdhouse';

  objectives: Objective[] = [];

  constructor(objectivesService: ObjectivesService) {
    this.objectives = objectivesService.getObjectives()
  }
}
