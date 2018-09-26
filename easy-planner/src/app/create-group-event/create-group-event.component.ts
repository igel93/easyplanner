import { Component, OnInit } from '@angular/core';

import { GroupEvent } from '../group-event';
import { EasyPlannerServerService } from '../easy-planner-server.service';
import { Event } from '../model/event';
import { User } from '../model/user';
import { ActivatedRoute, Router, NavigationEnd, RouterStateSnapshot, RouterLink } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.css']
})
export class CreateGroupEventComponent implements OnInit {
  id: string;
  key: string;
  name: string;

  user: User = {
    user_id: null,
    student_id: null,
    name: null,
    password: null,
    email: null
  };

  event: Event = {
    event_id: null,
    year: null,
    month: null,
    day: null,
    start_time: null,
    ending_time: null,
    location: null,
    group_name: null,
    group_size: null,
    describtion: null,
    user_id: this.key
  };

  onSubmit(value) {
    if (value.year == null) { } else { this.event.year = value.year; }
    if (value.month == null) { } else { this.event.month = value.month; }
    if (value.day == null) { } else { this.event.day = value.day; }
    if (value.start_time == null) { } else { this.event.start_time = value.start_time; }
    if (value.ending_time == null) { } else { this.event.ending_time = value.ending_time; }
    if (value.location == null) { } else { this.event.location = value.location; }
    if (value.group_name == null) { } else { this.event.group_name = value.group_name; }
    if (value.group_size == null) { } else { this.event.group_size = value.group_size; }
    if (value.describtion == null) { } else { this.event.describtion = value.describtion; }
    this.event.user_id = this.key;
    console.log(this.event);
    this.calendarService.addEvent(this.event)
      .subscribe(result => {
        if (result.affectedRows !== 0) {
          this.router.navigate(['/calendar-view'], { queryParams: { name: this.name, key: this.key } });
        }
      });
  }
  cancelClick() {
    this.router.navigate(['/calendar-view'], { queryParams: { name: this.name, key: this.key } });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendarService: EasyPlannerServerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      this.key = params['key'];
    });
  }


}
