import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { EasyPlannerServerService } from '../easy-planner-server.service';
import { User } from '../model/user';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
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
  valid:Boolean=false;
  constructor(private calendarService: EasyPlannerServerService
    , private router: Router) { }
  ngOnInit() { }

  onSubmit(value) {
    if(value.password!=null&&value.username!=null){
    this.calendarService.getUser(value.username, value.password)
      .subscribe(user => {
        this.user = user;
        if (value.password === this.user.password) {
          this.router.navigate(["/calendar-view"], { queryParams: { name: this.user.name, key: this.user.user_id } });
        }
        else {
          this.warning = "Username or Password incorrect, please try again.";
        }
      });
    }else{
      this.valid=true;
    }
  }

  // onClickAuthentication() {
  //   this.getUser()
  //   if (this.userName == this.user.student_id) {
  //     this.link = "/calendar-view";
  //     this.key = this.user.user_id;
  //     this.name = this.user.name;
  //   }
  //   else {
  //     this.warning = "Username or Passward incorrect, please try again."
  //   }
  // }

  // getUser() {
  //   this.calendarService.getUser(this.userName, this.password)
  //     .subscribe(user => {
  //       this.user = user
  //       //console.log(this.user.password)
  //     })
  // }

  // onUpdateUserName(event: Event) {
  //   this.userName = (<HTMLInputElement>event.target).value;
  // }
  // onUpdatePassword(event: Event) {
  //   this.password = (<HTMLInputElement>event.target).value;
  // }

}
