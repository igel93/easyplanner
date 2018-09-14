import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from '../app/log-in/log-in.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent },
  { path: 'login/calendar-view', component: CalendarViewComponent },
  { path: 'login/calendar-view/create-group-event', component: CreateGroupEventComponent },
  { path: 'login/sign-up', component: SignUpComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
