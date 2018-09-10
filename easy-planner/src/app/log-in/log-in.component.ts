import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { EasyPlannerServerService } from '../easy-planner-server.service'
import { User } from '../model/user'
@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  key: number;
  link: string;
  user: User;
  name: string;
  warning: string;
  userName: string;
  password: string;
  constructor(private calendarService: EasyPlannerServerService) { }
  ngOnInit() { }
  onClickAuthentication() {
    this.getUser()

    if (this.userName == this.user.student_id) {
      this.link = "/calendar-view";
      this.key = this.user.user_id;
      this.name = this.user.name;
    }
    else {
      this.warning = "username or Passward incorrect, please try again."
    }
  }

  getUser() {
    this.calendarService.getUser(this.userName, this.password)
      .subscribe(user => {
        this.user = user
        //console.log(this.user.password)
      })
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }



}