import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { EasyPlannerServerService } from '../easy-planner-server.service';
import { Event } from '../model/event';
import { Time } from '@angular/common';
@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.css']
})
export class ModifyEventComponent implements OnInit {
  id: string
  key: string
  name: string
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
    user_id: null
  }
  /**
   * this method is used to submit a form which contained the envent information for modifying the event.
   * @param value the form value
   */
  onSubmit(value) {
    if (value.start_time == null) { } else { this.event.start_time = value.start_time }
    if (value.ending_time == null) { } else { this.event.ending_time = value.ending_time }
    if (value.location == null) { } else { this.event.location = value.location }
    if (value.group_name == null) { } else { this.event.group_name = value.group_name }
    if (value.group_size == null) { } else { this.event.group_size = value.group_size }
    if (value.describtion == null) { } else { this.event.describtion = value.describtion }
    console.log(this.event)
    this.calendarService.updateEvent(this.event)
      .subscribe(result => {
        if (result.affectedRows != 0) {
          this.router.navigate(["/calendar-view"], { queryParams: { name: this.name, key: this.key } })
        }
      })
  }
  /**
   * this method is used to handel cancel event
   */
  cancelClick() {
    this.router.navigate(["/calendar-view"], { queryParams: { name: this.name, key: this.key } })
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendarService: EasyPlannerServerService) { }

  ngOnInit() {
    this.activatedRoute.queryParams
      .subscribe(params => {
        this.event.event_id = params['event_id'];
        this.key = params['key'];
        this.name = params['name']
      })
    this.calendarService.getEventByID(this.event.event_id)
      .subscribe(result => {
        if (result) {
          this.event = result
        }
      });
  }
}
