import { Component, OnInit } from '@angular/core';
import { EasyPlannerServerService } from '../easy-planner-server.service';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { isNull } from 'util';

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
  result: User = {
    user_id: null,
    student_id: null,
    name: null,
    password: null,
    email: null
  };
  warning: string;
  test:number;
  uid:string=null;
  constructor(private calendarService: EasyPlannerServerService, private router: Router) { }

  
  ngOnInit() {  }

  onSubmit(value) {
    //if (value.ending_time < value.start_time) { this.warning1 = "Ending time can not less than start time " }
      // this.user.student_id = value.student_id;
    // this.user.name = value.name;
    // this.user.email = value.email; 
    this.test=0;
    this.warning=" ";
    if (value.student_id == null) { } else {
       this.user.student_id = value.student_id; 
       this.test=this.test+1;}
    if (value.name == null) { } else { 
      this.user.name = value.name; 
      this.test=this.test+1;}
    if (value.email == null) { } else {
       this.user.email = value.email; 
       this.test=this.test+1;}
    if (value.password1 == value.password2&&value.password1!=null){
      this.user.password = value.password1; 
      this.test=this.test+1;
    }else{this.warning= this.warning+"The password has to be same one! ";}
  
    if(this.test==4){
      this.calendarService.getUser(this.user.student_id,this.user.password)
      .subscribe(result=>{
      this.result=result
      console.log("user:"+this.user.student_id)
      if(!isNull(result)){
        this.warning="The username already exist!"
      }else{
        this.calendarService.addUser(this.user)
        .subscribe(user => {
          if (user.affectedRows !== 0) {this.router.navigate(['/login']);}
        });
       }
      });
      // this.calendarService.addUser(this.user)
      // .subscribe(user => {
      //   if (user.affectedRows !== 0) {this.router.navigate(['/login']);}
      // });
    }else{
      this.warning= this.warning+"The register information is not allowed empty!  "
    }
  }
  
  cancelClick() {
    this.router.navigate(['/login']);
  }

}
