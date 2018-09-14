import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userName: string;
  key: string;
  password: string;
  router: Router;
  link: string;
  connection: any;
  constructor() { }
  ngOnInit() { }
  onClickAuthentication() {
    this.link = "/login/calendar-view";
    this.key = this.userName;
  }
  


  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }
  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }


 
}