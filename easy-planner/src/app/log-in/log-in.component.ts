import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userName: string;
  password: string;
  link: string;
  id: string;
  connection: any;
  userValad: string;
  passwordValad: string;

  constructor(private router: Router) { }

  ngOnInit() { }

  onClickAuthentication() {
    if (this.userName == 'test' && this.password == 'test') {
      this.id = this.userName;
      this.link = "/calendar-view/" + this.userName;
    } else {
      this.userValad = "*USER NAME OR PASEEWORD INCRRECT";
    }
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }



}