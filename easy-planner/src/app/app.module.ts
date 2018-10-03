import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { CalenderComponent } from './calendar-view/calender/calender.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';
import { EasyPlannerServerService } from './easy-planner-server.service';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ModifyEventComponent } from './modify-event/modify-event.component';
import { RegisterUserComponent } from './register-user/register-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterUserComponent,
    CalenderComponent,
    CreateGroupEventComponent,
    CalendarViewComponent,
    HeaderComponent,
    UserProfileComponent,
    ModifyEventComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EasyPlannerServerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
