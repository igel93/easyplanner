import { Component, OnInit } from '@angular/core';

import { GroupEvent } from '../group-event';
import { GROUPEVENTS } from 'src/mock-group-events';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.css']
})
export class CreateGroupEventComponent implements OnInit {
  model = new GroupEvent(1, 'Group meeting 1', '3PM', '4PM', '1. sept, 2019', 'UTS Sydney', '504', '...');
  submitted = false;
  events = GROUPEVENTS;

  onSubmit() { this.submitted = true; }

  newEvent() {
    this.model = new GroupEvent(2, '.', '.', '.', '.', '.', '.', '.');
  }

  constructor() { }

  ngOnInit() {
  }



}
