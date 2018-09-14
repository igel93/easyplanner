import { Component, OnInit } from '@angular/core';

import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  role = ['Student', 'Teacher'];

  // model = new User(1, '', '', '', 1);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  constructor() { }

  ngOnInit() {
  }

  newUser() {
    // this.model = new User(1, '', '', '', 1);
  }

  // get currentUser() { return JSON.stringify(this.model); return JSON.stringify(this.model); }
}
