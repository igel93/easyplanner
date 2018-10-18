import { Component, OnInit } from "@angular/core";

import { GroupEvent } from "../group-event";
import { EasyPlannerServerService } from "../easy-planner-server.service";
import { Event } from "../model/event";
import { User } from "../model/user";
import {
  ActivatedRoute,
  Router,
  NavigationEnd,
  RouterStateSnapshot,
  RouterLink
} from "@angular/router";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-create-group-event",
  templateUrl: "./create-group-event.component.html",
  styleUrls: ["./create-group-event.component.css"]
})
export class CreateGroupEventComponent implements OnInit {
  id: string;
  key: string;
  name: string;
  input: string;
  inputdate: string[];
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
  warning: string;
  dateFilledIn: boolean = true;
  restOfTheFieldsFilledIn: boolean = true;

  onSubmit(value) {
    if (typeof value.date === "undefined") {
      this.warning = "Remember to fill in date";
      this.dateFilledIn = false;
    } else {
      this.input = value.date;
      this.inputdate = this.input.split("-");
      this.event.year = Number(this.inputdate[0]);
      this.event.month = Number(this.inputdate[1]);
      this.event.day = Number(this.inputdate[2]);
    }

    if (
      value.start_time !== null &&
      value.ending_time !== null &&
      value.location !== null
    ) {
      this.event.start_time = value.start_time;
      this.event.ending_time = value.ending_time;
      this.event.location = value.location;
      this.event.group_name = value.group_name;
      this.event.group_size = value.group_size;
      this.event.describtion = value.describtion;
      this.event.user_id = this.key;
    } else {
      this.warning = "Remeber to fill in all fields";
      this.restOfTheFieldsFilledIn = false;
    }

    //console.log(this.event)
console.log(this.dateFilledIn)
console.log(this.restOfTheFieldsFilledIn)
    if (this.dateFilledIn && this.restOfTheFieldsFilledIn) {
      this.calendarService.addEvent(this.event).subscribe(result => {
        if (result.affectedRows !== 0) {
          this.router.navigate(["/calendar-view"], {
            queryParams: { name: this.name, key: this.key }
          });
        }
      });
    }
  }
  cancelClick() {
    this.router.navigate(["/calendar-view"], {
      queryParams: { name: this.name, key: this.key }
    });
  }

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendarService: EasyPlannerServerService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params["name"];
      this.key = params["key"];
    });
  }
}
