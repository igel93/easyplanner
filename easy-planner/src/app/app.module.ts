import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { AddUserComponent } from './add-user/add-user.component';
import { LogInComponent } from './log-in/log-in.component';
import { CalenderComponent } from './calender/calender.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AppRoutingComponent } from './app-routing/app-routing.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent, 
    UserDetailsComponent,
    AddUserComponent,
    LogInComponent,
    CalenderComponent,
    CreateGroupEventComponent,
    AddCustomerComponent,
    AppRoutingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
