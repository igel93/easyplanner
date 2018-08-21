import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CalenderComponent } from './calender/calender.component';


@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CreateGroupEventComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpModule,
    CalenderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
