import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { CalenderComponent } from './calender/calender.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CalenderComponent,
    CreateGroupEventComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
