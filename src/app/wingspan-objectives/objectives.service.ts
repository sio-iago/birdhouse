import { Injectable } from '@angular/core';
import {Objective} from "../shared/models/objective";

@Injectable({
  providedIn: 'root'
})
export class ObjectivesService {

  objectives: Objective[] = [
    {
      number: 1,
      name: "Sets of 3 eggs in all 3 environments",
    },
    {
      number: 2,
      name: "Total eggs in Forest",
    },
    {
      number: 3,
      name: "Total eggs in Swamp",
    },
    {
      number: 4,
      name: "Total eggs in Plain",
    },
    {
      number: 5,
      name: "Total eggs in ground nests",
    },
    {
      number: 6,
      name: "Total eggs in bowl nests",
    },
    {
      number: 7,
      name: "Total eggs in platform nests",
    },
    {
      number: 8,
      name: "Total eggs in cavity nests",
    },
    {
      number: 9,
      name: "Total birds in all habitats",
    },
    {
      number: 10,
      name: "Total birds in Forest",
    },
    {
      number: 11,
      name: "Total birds in Swamp",
    },
    {
      number: 12,
      name: "Total birds in Plain",
    },
    {
      number: 13,
      name: "Total birds with eggs in ground nests",
    },
    {
      number: 14,
      name: "Total birds with eggs in bowl nests",
    },
    {
      number: 15,
      name: "Total birds with eggs in platform nests",
    },
    {
      number: 16,
      name: "Total birds with eggs in cavity nests",
    },
  ];

  constructor() {
    this.objectives = this.objectives
      .map(v => ({...v, image: `${v.number}.jpg`}));
  }

  getObjectives(): Objective[] {
    return this.objectives;
  }
}
