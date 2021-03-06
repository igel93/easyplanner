import { Component, OnInit } from "@angular/core";
import {
  ActivatedRoute,
  NavigationEnd,
  Router,
  RouterStateSnapshot,
  RouterLink
} from "@angular/router";
import { EasyPlannerServerService } from "../easy-planner-server.service";
import { User } from "../model/user";
@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user: User = {
    user_id: null,
    student_id: null,
    name: null,
    password: null,
    email: null
  };
  warning: string;
  oldpassword = null;
  newpassword = null;

  /**
   * this method is used to submit a form which contained the user's old password and new password for changing password.
   * @param value form value
   */
  onSubmit(value) {
    if (
      value.oldPassword !== null &&
      value.newPassword1 !== null &&
      value.newPassword2 !== null
    ) {
      if (value.newPassword1 === value.newPassword2) {
        this.oldpassword = value.oldPassword;
        this.newpassword = value.newPassword1;
        this.service.updateUser(this.user, this.oldpassword, this.newpassword)
          .subscribe(
            result => {
              if (result.affectedRows !== 0) {
                this.router.navigate(["/calendar-view"], {
                  queryParams: { name: this.user.name, key: this.user.user_id }
                });
              }
            },
            err => (this.warning = err.error)
          );
      } else {
        this.warning = "Please enter same new password twice!";
      }
    } else {
      this.warning = "Make sure all fields are filled out!";
    }
  }
  /**
   * this method is used to cancel the change password and back to the main page.
   */
  cancelClick() {
    this.router.navigate(["/calendar-view"], {
      queryParams: { name: this.user.name, key: this.user.user_id }
    });
  }

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private service: EasyPlannerServerService
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.user.user_id = params["key"];
    });
    this.service.getUserByID(this.user.user_id).subscribe(user => {
      this.user = user;
    });
  }
}
