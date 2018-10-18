import { Component, OnInit, Input } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
  RouterLink
} from "@angular/router";
import { EasyPlannerServerService } from "../easy-planner-server.service";
import { User } from "../model/user";

@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"]
})
export class LogInComponent implements OnInit {
  key: number;
  user: User = {
    user_id: null,
    student_id: null,
    name: null,
    password: null,
    email: null
  };
  warning: string;
  valid: Boolean = false;
  constructor(
    private calendarService: EasyPlannerServerService,
    private router: Router
  ) {}


  ngOnInit() {}

  /**
   * this method is used to submit a form wihch contained username and password
   * @param value the form value which contained the user name and password
   */
  onSubmit(value) {
    if (value.password !== null && value.username !== null) {
      this.calendarService.verifyLogin(value.username, value.password)
        .subscribe(
          user => {
            this.user = user;
            this.router.navigate(["/calendar-view"], {
              queryParams: { name: this.user.name, key: this.user.user_id }
            });
          },
          err => (this.warning = err.error)
        );
    } else {
      this.valid = true;
    }
  }
}
