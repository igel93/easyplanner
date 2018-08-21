import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  private year: number;
  private month: number;
  private dateObject;
  private test;
  private selectedDate:number[]=[]; 
  //返回上个月份数据
  goPrev() {
    this.month--
    if (this.month == 0) {
      this.month = 12;
      this.year--;
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }
  goNext() {
    this.month++;
    if (this.month == 13) {
      this.month = 1;
      this.year++;
    }
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }
  //返回指定年月的日历日期数组
  getDatesOfMonth(year: number, month: number) {
    let datesArray:number []=[];
    let date = new Date(year, month - 1);
    let nowDay = new Date().getDate();
    let day = date.getDay();
    let lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
    //加入上个月的日期
    for (let i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
      datesArray.unshift(i);
    }
    //加入当月日期
    let lastDayOfNowMonth = new Date(year, month, 0).getDate()
    for (let index = 1; index <= lastDayOfNowMonth; index++) {
      datesArray.push(index);
    }
    //加入下个月日期
    let countOfNextMonth = 42 - lastDayOfNowMonth - day;
    for (let index = 1; index <= countOfNextMonth; index++) {
      datesArray.push(index);
    }
    console.log(datesArray)
    return {
      year: year,
      nowDay: nowDay,
      month: month,
      datesArray: datesArray,
    }
  }

  dateClickEvent(index,item) {
    this.selectedDate[0]=this.dateObject.year;
    if(item>14 && index<13 ){
      this.selectedDate[1]=this.dateObject.month-1;
      this.selectedDate[2]=item;
      this.test= this.selectedDate;
     return;
    }
    if(item < 14&&index>28){
      this.selectedDate[1]=this.dateObject.month+1;
      this.selectedDate[2]=item;
      this.test= this.selectedDate;
      return;
    }
    this.selectedDate[1]=this.dateObject.month;
    this.selectedDate[2]=item;
    this.test= this.selectedDate;
  }

  constructor() {
    let date = new 　Date()
    this.year = date.getFullYear()
    this.month = date.getMonth() + 1
  }
  
  ngOnInit() {
    this.dateObject = this.getDatesOfMonth(this.year, this.month)
  }

}
