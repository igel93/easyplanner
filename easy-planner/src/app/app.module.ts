import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { CalenderComponent } from './calendar-view/calender/calender.component';
import { CreateGroupEventComponent } from './create-group-event/create-group-event.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { EventDetialComponent } from './calendar-view/event-detial/event-detial.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    CalenderComponent,
    CreateGroupEventComponent,
    CalendarViewComponent,
    EventDetialComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
