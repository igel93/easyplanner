import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { EasyPlannerServerService } from '../../easy-planner-server.service'
import { Event } from '../../model/event'
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  private year: number;
  private month: number;
  private dateObject;
  success: boolean = false;
  message: string;
  key: string;
  name: string;
  clickDate: number[] = [];
  selectedDate: number[] = [];
  events: Event[] = [];
  nowDate = new Date();
  years = this.nowDate.getFullYear();
  yearStr: string = String(this.years);
  months = this.nowDate.getMonth() + 1;
  monthStr: string = String(this.months);
  days = this.nowDate.getDate();
  dayStr: string = String(this.days);
  calendarEvents: Event[] = [];
  flag: number[] = [];



  initFlag() {
    for (let i = 0; i < 42; i++) {
      this.flag[i] = 0
    }
  }

  myProfileClick() {
    if (this.key != null) {
      this.router.navigate(["/user-profile"], { queryParams: { key: this.key } })
    }
  }

  /**
   * return last month data
   */
  goPrev() {
    this.success = false;
    this.calendarService.getEvents(this.key)
      .subscribe(events => {
        this.calendarEvents = events
        this.dateObject = this.getDatesOfMonth(this.year, this.month)
      })
    this.month--
    if (this.month == 0) {
      this.month = 12;
      this.year--;
    }
    
    //console.log("month" + this.month)
    //console.log("flag values" + this.flag)
  }
  /**
   * //return next month data
   */
  goNext() {
    this.success = false;
    this.calendarService.getEvents(this.key)
      .subscribe(events => {
        this.calendarEvents = events
        this.dateObject = this.getDatesOfMonth(this.year, this.month)
      })
    this.month++;
    if (this.month == 13) {
      this.month = 1;
      this.year++;
    }
    
    // this.setFlag(this.year, this.month, this.dateObject)
    // console.log("flag length" + this.month)
    //console.log("flag values" + this.flag)
  }

  /**
   * return a array data which contains specific date inforamtion
   * @param year 
   * @param month 
   */
  getDatesOfMonth(year: number, month: number) {
    let datesArray: number[] = [];
    let monthArray: number[] = [];
    let date = new Date(year, month - 1);
    let nowDay = new Date().getDate();
    let nowMonth = new Date().getMonth() + 1;
    let day = date.getDay();
    let lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
    let tempYear = year
    let tempMonth = month
    let pastDates: number[] = [];
    let nowDates: number[] = [];
    let nextDates: number[] = [];
    this.initFlag();
    //add last months'date
    for (let i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
      datesArray.unshift(i);
      monthArray.unshift(month-1);
      pastDates.unshift(i);
    }
    //  console.log("last"+datesArray)
    //  console.log(pastDates)
    if (month == 1) {
      tempYear = year - 1
      tempMonth = 12
    } else {
      tempYear = year
      tempMonth = month - 1
    }
    for (let i = 0; i < pastDates.length; i++) {
      for (let j = 0; j < this.calendarEvents.length; j++) {
        if (this.calendarEvents[j].year == tempYear && this.calendarEvents[j].month == tempMonth && this.calendarEvents[j].day == pastDates[i]) {
          this.flag[i] = 1
        }
      }
    }

    //add this months'date
    let lastDayOfNowMonth = new Date(year, month, 0).getDate()
    for (let index = 1; index <= lastDayOfNowMonth; index++) {
      datesArray.push(index);
      monthArray.push(month);
     
      nowDates.push(index);
    }
    //console.log("now"+nowDates)
    for (let i = 0; i < nowDates.length; i++) {
      for (let j = 0; j < this.calendarEvents.length; j++) {
        if (this.calendarEvents[j].year == year && this.calendarEvents[j].month == month && this.calendarEvents[j].day == nowDates[i]) {
          //console.log('my test' + j + this.calendarEvents[j].year, year + 'month' + this.calendarEvents[j].month, month + 'day' + this.calendarEvents[j].day, nowDates[i])
          this.flag[pastDates.length + i] = 1
        }
      }
    }

    //add next months' date
    let countOfNextMonth = 42 - lastDayOfNowMonth - day;
    for (let index = 1; index <= countOfNextMonth; index++) {
      datesArray.push(index);
      monthArray.push(month+1);
      nextDates.push(index);
    }
    // console.log("next" + datesArray)
    // console.log("changdu" + datesArray.length)
    if (month == 12) {
      tempYear = year + 1
      tempMonth = 1
    } else {
      tempYear = year
      tempMonth = month + 1
    }
    for (let i = 0; i < nextDates.length; i++) {
      for (let j = 0; j < this.calendarEvents.length; j++) {
        if (this.calendarEvents[j].year == tempYear && this.calendarEvents[j].month == tempMonth && this.calendarEvents[j].day == nextDates[i]) {
          this.flag[pastDates.length + nowDates.length + i] = 1
        }
      }
    }
    //console.log(datesArray)
    return {
      year: year,
      nowDay: nowDay,
      nowMonth: nowMonth,
      month: month,
      datesArray: datesArray,
      monthArray:monthArray
    }
  }

  /**
   * this click method will retrun the cilcked date for search
   * @param index 
   * @param item 
   */
  dateClickEvent(index, item) {
    this.selectedDate = [];
    this.success = false;
    if (this.dateObject.month == 12 && item < 14 && index > 28) {
      this.selectedDate[0] = this.dateObject.year + 1;
    }
    else { this.selectedDate[0] = this.dateObject.year; }
    if (item > 14 && index < 13 && this.dateObject.month != 1) {
      this.selectedDate[1] = this.dateObject.month - 1;
      this.selectedDate[2] = item;
      this.clickDate = this.selectedDate
      this.yearStr = String(this.clickDate[0]);
      this.monthStr = String(this.clickDate[1]);
      this.dayStr = String(this.clickDate[2]);
      this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
        .subscribe(events => {
          this.events = events
        })
      return;
    }
    if (item > 14 && index < 13 && this.dateObject.month == 1) {
      this.selectedDate[1] = 12;
      this.selectedDate[2] = item;
      this.clickDate = this.selectedDate
      this.yearStr = String(this.clickDate[0]);
      this.monthStr = String(this.clickDate[1]);
      this.dayStr = String(this.clickDate[2]);
      this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
        .subscribe(events => {
          this.events = events
        })
      return;
    }
    if (item < 14 && index > 28 && this.dateObject.month != 12) {
      this.selectedDate[1] = this.dateObject.month + 1;
      this.selectedDate[2] = item;
      this.clickDate = this.selectedDate
      this.yearStr = String(this.clickDate[0]);
      this.monthStr = String(this.clickDate[1]);
      this.dayStr = String(this.clickDate[2]);
      this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
        .subscribe(events => {
          this.events = events
        })
      return;
    }
    if (item < 14 && index > 28 && this.dateObject.month == 12) {
      this.selectedDate[1] = 1;
      this.selectedDate[2] = item;
      this.clickDate = this.selectedDate
      this.yearStr = String(this.clickDate[0]);
      this.monthStr = String(this.clickDate[1]);
      this.dayStr = String(this.clickDate[2]);
      this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
        .subscribe(events => {
          this.events = events
        })
      return;
    }
    this.selectedDate[1] = this.dateObject.month;
    this.selectedDate[2] = item;
    this.clickDate = this.selectedDate
    this.yearStr = String(this.clickDate[0]);
    this.monthStr = String(this.clickDate[1]);
    this.dayStr = String(this.clickDate[2]);
    this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
      .subscribe(events => {
        this.events = events
      })
  }

  deleteClick(event_id: string) {
    this.calendarService.deleteEvent(event_id)
      .subscribe(result => {
        if (result.affectedRows != 0) {
          this.success = true;
          this.message = event_id;
          //this.ngOnInit();
        }
      })
  }

  modifyClick(event_id: string) {
    if (event_id != null) {
      this.router.navigate(['/modify-event'], { queryParams: { event_id: event_id,key:this.key,name:this.name} })
    }
  }

  constructor(
    private ref: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private calendarService: EasyPlannerServerService) {
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }

  trackEvents(index, event) {
    return event ? event.event_id : undefined;
  }

  ngOnInit() {
    // this.key = this.activatedRoute.snapshot.queryParamMap.get('key')
    this.activatedRoute.queryParams.subscribe(params => {
      this.name = params['name'];
      this.key = params['key'];
    });
    this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
      .subscribe(events => {
        this.events = events
        // console.log("result is" + this.events.length)
      })
    //console.log("key is" + this.key)
    this.calendarService.getEvents(this.key)
      .subscribe(events => {
        this.calendarEvents = events
        this.dateObject = this.getDatesOfMonth(this.year, this.month)
        // console.log(this.calendarEvents[0].year, this.calendarEvents[0].month, this.calendarEvents[0].day)
        // console.log(this.calendarEvents[1].year, this.calendarEvents[1].month, this.calendarEvents[1].day)
        // console.log(this.calendarEvents[2].year, this.calendarEvents[2].month, this.calendarEvents[2].day)
        // console.log(this.calendarEvents[3].year, this.calendarEvents[3].month, this.calendarEvents[3].day)
        // console.log(this.calendarEvents[4].year, this.calendarEvents[4].month, this.calendarEvents[4].day)
      })
    
    // console.log("flag length" + this.flag.length)
    //console.log("flag values" + this.flag)
  }
}
