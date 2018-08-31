import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  private year: number;
  private month: number;
  private dateObject;
  private id: string;
  private selectedDate: number[] = [];

  /**
   * return last month data
   */
  goPrev() {
    this.month--
    if (this.month == 0) {
      this.month = 12;
      this.year--;
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }
  /**
   * //return next month data
   */
  goNext() {
    this.month++;
    if (this.month == 13) {
      this.month = 1;
      this.year++;
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }

  /**
   * return a array data which contains specific date inforamtion
   * @param year 
   * @param month 
   */
  getDatesOfMonth(year: number, month: number) {
    let datesArray: number[] = [];
    let date = new Date(year, month - 1);
    let nowDay = new Date().getDate();
    let day = date.getDay();
    let lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
    //add last months'date
    for (let i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
      datesArray.unshift(i);
    }
    //add this months'date
    let lastDayOfNowMonth = new Date(year, month, 0).getDate()
    for (let index = 1; index <= lastDayOfNowMonth; index++) {
      datesArray.push(index);
    }
    //add next months' date
    let countOfNextMonth = 42 - lastDayOfNowMonth - day;
    for (let index = 1; index <= countOfNextMonth; index++) {
      datesArray.push(index);
    }
    return {
      year: year,
      nowDay: nowDay,
      month: month,
      datesArray: datesArray,
    }
  }
  /**
   * this click method will retrun the cilcked date for search
   * @param index 
   * @param item 
   */
  dateClickEvent(index, item) {
    // this array stored 0year,1month,2date. 
    this.selectedDate = [];
    this.selectedDate[0] = this.dateObject.year;
    if (item > 14 && index < 13) {
      this.selectedDate[1] = this.dateObject.month - 1;
      this.selectedDate[2] = item;
      return;
    }
    if (item < 14 && index > 28) {
      this.selectedDate[1] = this.dateObject.month + 1;
      this.selectedDate[2] = item;
      return;
    }
    this.selectedDate[1] = this.dateObject.month;
    this.selectedDate[2] = item;
  }

  constructor(
    private ref: ChangeDetectorRef,
    private route: ActivatedRoute,
    private router: Router) {
    let date = new Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }

  ngOnInit() {
    this.dateObject = this.getDatesOfMonth(this.year, this.month);
    this.id = this.route.snapshot.paramMap.get('id');
  }

}
