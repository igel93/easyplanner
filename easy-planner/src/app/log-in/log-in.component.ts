import { Component, OnInit } from '@angular/core';
import { CalenderComponent } from '../calender/calender.component';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  userName: string;
  password: string;
  hide: boolean = true;
  logIn:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  onClickAuthentication() {
    this.hide = false;
    this.logIn=true;
  }
  onUpdateUserName(event:Event) {
    this.userName=(<HTMLInputElement>event.target).value;
   }
   onUpdatePassword(event:Event) {
    this.password=(<HTMLInputElement>event.target).value;
   }
}