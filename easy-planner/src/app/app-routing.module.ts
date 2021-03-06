import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component'
import { CalendarViewComponent } from './calendar-view/calendar-view.component'
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component'
import { UserProfileComponent } from './user-profile/user-profile.component'
import { ModifyEventComponent } from './modify-event/modify-event.component'
import { RegisterUserComponent } from './register-user/register-user.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'app-register-user', component: RegisterUserComponent },
  { path: 'calendar-view', component: CalendarViewComponent },
  { path: 'create-group-event', component: CreateGroupEventComponent },
  { path: 'user-profile', component: UserProfileComponent },
  { path: 'modify-event', component: ModifyEventComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }