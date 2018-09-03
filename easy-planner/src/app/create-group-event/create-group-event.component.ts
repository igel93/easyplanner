import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GroupEvent } from '../group-event';
import { GROUPEVENTS } from 'src/mock-group-events';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.css']
})
export class CreateGroupEventComponent implements OnInit {
  model = new GroupEvent(1, 'Group meeting 1', '3PM', '4PM', '1. sept, 2019', 'UTS Sydney', '504', '...');
  router: Router;
  submitted = false;
  link: string;
  events = GROUPEVENTS;

  onSubmit() {
    this.submitted = true;
    this.link = '/login/calendar-view';
  }

  newEvent() {
    this.model = new GroupEvent(2, '.', '.', '.', '.', '.', '.', '.');
  }

  constructor() { }

  ngOnInit() {
  }



}
