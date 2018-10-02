import { Component, OnInit } from '@angular/core';
import { EasyPlannerServerService } from '../easy-planner-server.service';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  user: User = {
    user_id: null,
    student_id: null,
    name: null,
    password: null,
    email: null
  };

  constructor(private calendarService: EasyPlannerServerService, private router: Router) { }

  ngOnInit() {  }

  onSubmit(value) {
    //if (value.ending_time < value.start_time) { this.warning1 = "Ending time can not less than start time " }
    if (value.student_id == null) { } else { this.user.student_id = value.student_id; }
    if (value.name == null) { } else { this.user.name = value.name; }
    if (value.password == null) { } else { this.user.password = value.password; }
    if (value.email == null) { } else { this.user.email = value.email; }
    console.log(this.user);
    this.calendarService.addUser(this.user)
      .subscribe(user => {
        if (user.affectedRows !== 0) {
          this.router.navigate(['/login'], { queryParams: { name: this.user.name, key: this.user.user_id } });
        }
      });
  }

  cancelClick() {
    this.router.navigate(['/login']);
  }

}
