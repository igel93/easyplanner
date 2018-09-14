(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar-view/calendar-view.component */ "./src/app/calendar-view/calendar-view.component.ts");
/* harmony import */ var _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-group-event/create-group-event.component */ "./src/app/create-group-event/create-group-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _app_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"] },
    { path: 'calendar-view', component: _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarViewComponent"] },
    { path: 'create-group-event', component: _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_4__["CreateGroupEventComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3{\r\n    color:darkslateblue;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n<!-- <app-log-in></app-log-in>\r\n<app-calendar-view></app-calendar-view>\r\n<app-create-group-event></app-create-group-event> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Easy Pplanner';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./log-in/log-in.component */ "./src/app/log-in/log-in.component.ts");
/* harmony import */ var _calendar_view_calender_calender_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./calendar-view/calender/calender.component */ "./src/app/calendar-view/calender/calender.component.ts");
/* harmony import */ var _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-group-event/create-group-event.component */ "./src/app/create-group-event/create-group-event.component.ts");
/* harmony import */ var _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./calendar-view/calendar-view.component */ "./src/app/calendar-view/calendar-view.component.ts");
/* harmony import */ var _calendar_view_event_detial_event_detial_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./calendar-view/event-detial/event-detial.component */ "./src/app/calendar-view/event-detial/event-detial.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _log_in_log_in_component__WEBPACK_IMPORTED_MODULE_5__["LogInComponent"],
                _calendar_view_calender_calender_component__WEBPACK_IMPORTED_MODULE_6__["CalenderComponent"],
                _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_7__["CreateGroupEventComponent"],
                _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__["CalendarViewComponent"],
                _calendar_view_event_detial_event_detial_component__WEBPACK_IMPORTED_MODULE_9__["EventDetialComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_easy_planner_server_service__WEBPACK_IMPORTED_MODULE_12__["EasyPlannerServerService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calendar-view/calendar-view.component.css":
/*!***********************************************************!*\
  !*** ./src/app/calendar-view/calendar-view.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n"

/***/ }),

/***/ "./src/app/calendar-view/calendar-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/calendar-view/calendar-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"text-align:center\">\r\n  <div class=\"col-md-5\">\r\n    <app-calender> </app-calender>\r\n  </div> \r\n  <div class=\"col-md-7\">\r\n    <app-event-detial></app-event-detial>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/calendar-view/calendar-view.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/calendar-view/calendar-view.component.ts ***!
  \**********************************************************/
/*! exports provided: CalendarViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarViewComponent", function() { return CalendarViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalendarViewComponent = /** @class */ (function () {
    function CalendarViewComponent() {
    }
    CalendarViewComponent.prototype.ngOnInit = function () {
    };
    CalendarViewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calendar-view',
            template: __webpack_require__(/*! ./calendar-view.component.html */ "./src/app/calendar-view/calendar-view.component.html"),
            styles: [__webpack_require__(/*! ./calendar-view.component.css */ "./src/app/calendar-view/calendar-view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CalendarViewComponent);
    return CalendarViewComponent;
}());



/***/ }),

/***/ "./src/app/calendar-view/calender/calender.component.css":
/*!***************************************************************!*\
  !*** ./src/app/calendar-view/calender/calender.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".date-wrap {\r\n    margin: 60px auto;\r\n    width: 400px;\r\n    height: 400px;\r\n    display: flex;\r\n    border: 1px solid #eee;\r\n    flex-direction: column;\r\n    box-shadow: 2px 2px 4px #ccc;\r\n}\r\n\r\n.date-wrap .date-head {\r\n    height: 70px;\r\n    flex-basis: 13%;\r\n    line-height: 70px;\r\n    font-family: serif;\r\n    font-size: 25px;\r\n    color: lightslategrey;\r\n    text-align: center;\r\n    border-bottom: 1px solid #aaa;\r\n}\r\n\r\n.date-head a {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    color: deepskyblue;\r\n}\r\n\r\na.left-btn {\r\n    float: left;\r\n    margin-left: 30px;\r\n}\r\n\r\na.right-btn {\r\n    float: right;\r\n    margin-right: 30px;\r\n}\r\n\r\n.date-day {\r\n    flex-basis: 14%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    color: #666;\r\n    font-family: '黑体';\r\n}\r\n\r\n.date-body {\r\n    flex-basis: 87%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.date-body .date-item {\r\n    flex-basis: 14%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: lightslategray\r\n}\r\n\r\n.date-body .date-item:hover {\r\n    color: indianred;\r\n}\r\n\r\n.active {\r\n    background: deepskyblue;\r\n    color: white!important;\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/calendar-view/calender/calender.component.html":
/*!****************************************************************!*\
  !*** ./src/app/calendar-view/calender/calender.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"date-wrap\">\r\n  <div class=\"date-head\">\r\n    <a (click)=\"goPrev()\" class=\"left-btn\">&lt;</a>{{dateObject.year}}-{{dateObject.month}}\r\n    <a class=\"right-btn\" (click)=\"goNext()\">&gt;</a>\r\n  </div>\r\n  <div class=\"date-body\">\r\n    <div class=\"date-day\">Sun</div>\r\n    <div class=\"date-day\">Mon</div>\r\n    <div class=\"date-day\">Tue</div>\r\n    <div class=\"date-day\">Wed</div>\r\n    <div class=\"date-day\">Thu</div>\r\n    <div class=\"date-day\">Fri</div>\r\n    <div class=\"date-day\">Sat</div>\r\n    <div \r\n    *ngFor=\"let item of dateObject.datesArray,let i = index\" \r\n    class=\"date-item\" [class.active]=\"item == dateObject.nowDay\"\r\n    (click)='dateClickEvent(i,item)'>{{item}}</div>\r\n  </div>\r\n</div>\r\n<div >\r\n  <a>{{test}}</a>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/calendar-view/calender/calender.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/calendar-view/calender/calender.component.ts ***!
  \**************************************************************/
/*! exports provided: CalenderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalenderComponent", function() { return CalenderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalenderComponent = /** @class */ (function () {
    function CalenderComponent(ref) {
        this.ref = ref;
        this.selectedDate = [];
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
    }
    /**
     * return last month data
     */
    CalenderComponent.prototype.goPrev = function () {
        this.month--;
        if (this.month == 0) {
            this.month = 12;
            this.year--;
        }
        this.dateObject = this.getDatesOfMonth(this.year, this.month);
    };
    /**
     * //return next month data
     */
    CalenderComponent.prototype.goNext = function () {
        this.month++;
        if (this.month == 13) {
            this.month = 1;
            this.year++;
        }
        this.dateObject = this.getDatesOfMonth(this.year, this.month);
    };
    /**
     * return a array data which contains specific date inforamtion
     * @param year
     * @param month
     */
    CalenderComponent.prototype.getDatesOfMonth = function (year, month) {
        var datesArray = [];
        var date = new Date(year, month - 1);
        var nowDay = new Date().getDate();
        var day = date.getDay();
        var lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
        //add last months'date
        for (var i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
            datesArray.unshift(i);
        }
        //add this months'date
        var lastDayOfNowMonth = new Date(year, month, 0).getDate();
        for (var index = 1; index <= lastDayOfNowMonth; index++) {
            datesArray.push(index);
        }
        //add next months' date
        var countOfNextMonth = 42 - lastDayOfNowMonth - day;
        for (var index = 1; index <= countOfNextMonth; index++) {
            datesArray.push(index);
        }
        console.log(datesArray);
        return {
            year: year,
            nowDay: nowDay,
            month: month,
            datesArray: datesArray,
        };
    };
    /**
     * this click method will retrun the cilcked date for search
     * @param index
     * @param item
     */
    CalenderComponent.prototype.dateClickEvent = function (index, item) {
        this.selectedDate = [];
        this.selectedDate[0] = this.dateObject.year;
        if (item > 14 && index < 13) {
            this.selectedDate[1] = this.dateObject.month - 1;
            this.selectedDate[2] = item;
            this.test = this.selectedDate;
            return;
        }
        if (item < 14 && index > 28) {
            this.selectedDate[1] = this.dateObject.month + 1;
            this.selectedDate[2] = item;
            this.test = this.selectedDate;
            return;
        }
        this.selectedDate[1] = this.dateObject.month;
        this.selectedDate[2] = item;
        this.test = this.selectedDate;
    };
    CalenderComponent.prototype.ngOnInit = function () {
        this.dateObject = this.getDatesOfMonth(this.year, this.month);
    };
    CalenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calender',
            template: __webpack_require__(/*! ./calender.component.html */ "./src/app/calendar-view/calender/calender.component.html"),
            styles: [__webpack_require__(/*! ./calender.component.css */ "./src/app/calendar-view/calender/calender.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/calendar-view/event-detial/event-detial.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/calendar-view/event-detial/event-detial.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/calendar-view/event-detial/event-detial.component.html":
/*!************************************************************************!*\
  !*** ./src/app/calendar-view/event-detial/event-detial.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"nav navbar-nav navbar-right\">\r\n      <li><a>Hi,{{name}}</a></li>\r\n      <li><a  routerLink=\"/login\">Logout</a></li>\r\n    </ul>\r\n  </div>\r\n  <h2>My meetings\r\n    <button\r\n     class=\"btn btn-primary\" \r\n     routerLink=\"/create-group-event\">Add New</button>\r\n  </h2>\r\n  <ul class=\"events\">\r\n    <li *ngFor=\"let event of events\">\r\n      <span> {{event.id}} </span>\r\n      {{event.eventTitle}} {{event.fromTime}} {{event.toTime}} {{event.date}} {{event.position}} {{event.room}} {{event.note}}\r\n    </li>\r\n  </ul>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/calendar-view/event-detial/event-detial.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/calendar-view/event-detial/event-detial.component.ts ***!
  \**********************************************************************/
/*! exports provided: EventDetialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventDetialComponent", function() { return EventDetialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_mock_group_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mock-group-events */ "./src/mock-group-events.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EventDetialComponent = /** @class */ (function () {
    function EventDetialComponent(activatedRoute) {
        this.activatedRoute = activatedRoute;
        this.events = src_mock_group_events__WEBPACK_IMPORTED_MODULE_2__["GROUPEVENTS"];
    }
    EventDetialComponent.prototype.ngOnInit = function () {
        //this method will get the papameter from last component
        this.name = this.activatedRoute.snapshot.queryParamMap.get('name');
        this.key = this.activatedRoute.snapshot.queryParamMap.get('key');
    };
    EventDetialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-event-detial',
            template: __webpack_require__(/*! ./event-detial.component.html */ "./src/app/calendar-view/event-detial/event-detial.component.html"),
            styles: [__webpack_require__(/*! ./event-detial.component.css */ "./src/app/calendar-view/event-detial/event-detial.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], EventDetialComponent);
    return EventDetialComponent;
}());



/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\n/* Application-wide Styles */\r\n\r\nh1 {\r\n      color: #369;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-size: 250%;\r\n    }\r\n\r\nh2, h3 {\r\n      color: #444;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-weight: lighter;\r\n    }\r\n\r\nbody {\r\n      margin: 2em;\r\n    }\r\n\r\nbody, input[text], button {\r\n      color: #888;\r\n      font-family: Cambria, Georgia;\r\n    }\r\n\r\n/* everywhere else */\r\n\r\n* {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n\r\n.ng-valid[required], .ng-valid.required  {\r\n     border-left: 5px solid #42A948; /* green */\r\n    }\r\n\r\n.ng-invalid:not(form)  {\r\n      border-left: 5px solid #a94442; /* red */\r\n    }\r\n\r\n.events {\r\n      margin: 0 0 2em 0;\r\n      list-style-type: none;\r\n      padding: 0;\r\n      width: 50em;\r\n    }\r\n\r\n.events li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      left: 0;\r\n      background-color: #EEE;\r\n      margin: .5em;\r\n      padding: .1em 0;\r\n      height: 1.6em;\r\n      border-radius: 4px;\r\n    }\r\n\r\n.li .text {\r\n      position: relative;\r\n      top: -3px;\r\n    }\r\n\r\n.events .events {\r\n      display: inline-block;\r\n      font-size: small;\r\n      color: white;\r\n      padding: 0.8em 0.7em 0 0.7em;\r\n      background-color: #607D8B;\r\n      line-height: 1em;\r\n      position: relative;\r\n      left: -1px;\r\n      top: -4px;\r\n      height: 1.8em;\r\n      margin-right: .8em;\r\n      border-radius: 4px 0 0 4px;\r\n    }"

/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"create-group-event-panel\">\r\n<div [hidden]=\"submitted\">\r\n  <h1>Event details</h1>\r\n  <form (ngSumbit)=\"onSubmit()\" name=\"group event form\" #groupEventForm=\"ngForm\">\r\n    <div class=\"form-group\">\r\n      <label for=\"eventTitle\">Title of the event </label>\r\n      <input type=\"text\" class=\"form-control\" name=\"eventTitle\" id=\"eventTitle\" required value=\"Event title\"\r\n      [(ngModel)]=\"model.eventTitle\" eventTitle = \"eventTitle\" #eventTitle=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"eventTitle\">Date</label>\r\n      <input type=\"date\" class=\"form-control\" name=\"date\" value=\"Select date\" required\r\n      [(ngModel)]=\"model.fromDate\" fromDate = \"fromDate\" #eventTitle=\"ngModel\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"fromTime\">From time </label>\r\n      <input type=\"time\" value=\"12:00\" class=\"form-control\" name=\"fromTime\" required\r\n      [(ngModel)]=\"model.fromTime\" fromTime = \"fromTime\" #eventTitle=\"ngModel\" />\r\n      <label for=\"toTime\">To time </label>\r\n      <input type=\"time\" value=\"13:00\" class=\"form-control\" name=\"toTime\" required\r\n      [(ngModel)]=\"model.toTime\" toTime = \"toTime\" #eventTitle=\"ngModel\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"position\">Position </label>\r\n      <input type=\"text\" class=\"form-control\" value=\"UTS Building 11\" name=\"position\" required\r\n      [(ngModel)]=\"model.position\" position = \"postition\" #eventTitle=\"ngModel\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"room\">Room </label>\r\n      <input type=\"text\" class=\"form-control\" value=\"505\" name=\"room\"\r\n      [(ngModel)]=\"model.room\" room = \"room\" #eventTitle=\"ngModel\"/>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label for=\"note\">Note </label>\r\n      <textarea rows=\"4\" cols=\"20\" name=\"textArea\" value=\"Notes...\" class=\"form-control\" [(ngModel)]=\"model.note\" note = \"note\" #eventTitle=\"ngModel\">\r\n      </textarea>\r\n    </div>\r\n  </form>\r\n  <button type=\"submit\" class=\"btn btn-success\" routerLink=\"/calendar-view\" >Submit </button>\r\n  <button type=\"button\" class=\"btn btn-default\"  (click)=\"newGroupEvent()\"> New Group Event</button>\r\n\r\n<div>\r\n  <h2>My meetings</h2> \r\n    <ul class=\"events\">\r\n      <li *ngFor=\"let event of events\">\r\n        <span> {{event.id}} </span>\r\n        {{event.eventTitle}}\r\n        {{event.fromTime}}\r\n        {{event.toTime}}\r\n        {{event.date}}\r\n        {{event.position}}\r\n        {{event.room}}\r\n      </li>\r\n    </ul>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.ts ***!
  \********************************************************************/
/*! exports provided: CreateGroupEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupEventComponent", function() { return CreateGroupEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _group_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../group-event */ "./src/app/group-event.ts");
/* harmony import */ var src_mock_group_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/mock-group-events */ "./src/mock-group-events.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateGroupEventComponent = /** @class */ (function () {
    function CreateGroupEventComponent() {
        this.model = new _group_event__WEBPACK_IMPORTED_MODULE_1__["GroupEvent"](1, 'Group meeting 1', '3PM', '4PM', '1. sept, 2019', 'UTS Sydney', '504', '...');
        this.submitted = false;
        this.events = src_mock_group_events__WEBPACK_IMPORTED_MODULE_2__["GROUPEVENTS"];
    }
    CreateGroupEventComponent.prototype.onSubmit = function () { this.submitted = true; };
    CreateGroupEventComponent.prototype.newEvent = function () {
        this.model = new _group_event__WEBPACK_IMPORTED_MODULE_1__["GroupEvent"](2, '.', '.', '.', '.', '.', '.', '.');
    };
    CreateGroupEventComponent.prototype.ngOnInit = function () {
    };
    CreateGroupEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group-event',
            template: __webpack_require__(/*! ./create-group-event.component.html */ "./src/app/create-group-event/create-group-event.component.html"),
            styles: [__webpack_require__(/*! ./create-group-event.component.css */ "./src/app/create-group-event/create-group-event.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CreateGroupEventComponent);
    return CreateGroupEventComponent;
}());



/***/ }),

/***/ "./src/app/easy-planner-server.service.ts":
/*!************************************************!*\
  !*** ./src/app/easy-planner-server.service.ts ***!
  \************************************************/
/*! exports provided: EasyPlannerServerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EasyPlannerServerService", function() { return EasyPlannerServerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var EasyPlannerServerService = /** @class */ (function () {
    function EasyPlannerServerService(http) {
        this.http = http;
        this.url = "http://localhost:3000/";
    }
    EasyPlannerServerService.prototype.getUser = function (user) {
        return this.http.get(this.url + 'login/' + user.student_id + '/' + user.password);
    };
    EasyPlannerServerService.prototype.addUser = function (user) {
        return this.http.post(this.url + 'login/', user, httpOptions);
    };
    EasyPlannerServerService.prototype.updateUser = function (user) {
        return this.http.put(this.url + 'login/' + user.student_id, user, httpOptions);
    };
    EasyPlannerServerService.prototype.getEvents = function (user) {
        return this.http.get(this.url + 'calender-view/' + user.user_id);
    };
    EasyPlannerServerService.prototype.addEvent = function (event) {
        return this.http.post(this.url + 'calender-view/', event, httpOptions);
    };
    EasyPlannerServerService.prototype.updateEvent = function (event) {
        return this.http.put(this.url + 'calender-view/' + event.event_id, event, httpOptions);
    };
    EasyPlannerServerService.prototype.deleteEvent = function (event) {
        return this.http.delete(this.url + 'calender-view/' + event.event_id);
    };
    EasyPlannerServerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EasyPlannerServerService);
    return EasyPlannerServerService;
}());



/***/ }),

/***/ "./src/app/group-event.ts":
/*!********************************!*\
  !*** ./src/app/group-event.ts ***!
  \********************************/
/*! exports provided: GroupEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupEvent", function() { return GroupEvent; });
var GroupEvent = /** @class */ (function () {
    function GroupEvent(id, eventTitle, fromTime, toTime, date, position, room, note) {
        this.id = id;
        this.eventTitle = eventTitle;
        this.fromTime = fromTime;
        this.toTime = toTime;
        this.date = date;
        this.position = position;
        this.room = room;
        this.note = note;
    }
    return GroupEvent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav  class=\"navbar navbar-default\">\r\n    <div class=\"container-fluid\">\r\n      <div  class=\"navbar-header\">\r\n        <h3><img width=\"60\" alt=\"EasyPlannerLogo\" src=\"./src/image/ep-logo.png\" /> Welcome to Easy Planner!\r\n        </h3>\r\n      </div>\r\n    <div class=\"collapse navbar-collapse\" *ngIf='false'>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a>Hi,{{name}}</a></li>\r\n        <li><a>Logout</a></li>\r\n      </ul>\r\n    </div>\r\n    </div>\r\n  </nav>\r\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () { };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/log-in/log-in.component.css":
/*!*********************************************!*\
  !*** ./src/app/log-in/log-in.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/log-in/log-in.component.html":
/*!**********************************************!*\
  !*** ./src/app/log-in/log-in.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\r\n  <form (ngSubmit)=\"onClickAuthentication()\" #loginForm=\"ngForm\">\r\n    <div>\r\n      <label>USER NAME:</label>\r\n      <input type=\"text\" (input)=\"onUpdateUserName($event)\">\r\n    </div>\r\n    <div>\r\n      <label class=\"\">PASSWORD:</label>\r\n      <input type=\"password\" (input)=\"onUpdatePassword($event)\">\r\n    </div>\r\n    <hr>\r\n    <a>{{warning}}</a>\r\n    <div>\r\n      <button class=\"btn btn-primary\">Sign In</button>\r\n      <button class=\"btn btn-primary\" routerLink={{link}} [queryParams]=\"{name:name,key:key}\" (click)=\"onClickAuthentication()\">Confirm</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/log-in/log-in.component.ts":
/*!********************************************!*\
  !*** ./src/app/log-in/log-in.component.ts ***!
  \********************************************/
/*! exports provided: LogInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogInComponent", function() { return LogInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LogInComponent = /** @class */ (function () {
    function LogInComponent(calendarService) {
        this.calendarService = calendarService;
    }
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.getUser = function () {
        var _this = this;
        this.calendarService.getUser(this.user)
            .subscribe(function (user) {
            _this.calendarService.user = user;
            _this.user = user;
        });
    };
    LogInComponent.prototype.onClickAuthentication = function () {
        this.user.student_id = this.userName;
        this.user.password = this.password;
        this.getUser();
        if (this.user.user_id) {
            this.link = "/calendar-view";
            this.key = this.user.user_id;
            this.name = this.user.name;
        }
        else {
            this.warning = "username or Passward incorrect, please try again.";
        }
    };
    LogInComponent.prototype.onUpdateUserName = function (event) {
        this.userName = event.target.value;
    };
    LogInComponent.prototype.onUpdatePassword = function (event) {
        this.password = event.target.value;
    };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [_easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__["EasyPlannerServerService"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "./src/mock-group-events.ts":
/*!**********************************!*\
  !*** ./src/mock-group-events.ts ***!
  \**********************************/
/*! exports provided: GROUPEVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GROUPEVENTS", function() { return GROUPEVENTS; });
var GROUPEVENTS = [
    {
        id: 1, eventTitle: 'Meeting 2',
        fromTime: '18:00', toTime: '19:00',
        date: '05-09-2018', position: 'Oslo', room: '104',
        note: '...'
    },
    {
        id: 2, eventTitle: 'Meeting 3',
        fromTime: '18:00', toTime: '19:00',
        date: '05-09-2018', position: 'Oslo', room: '104',
        note: '...'
    },
    {
        id: 3, eventTitle: 'Meeting 4',
        fromTime: '18:00', toTime: '19:00',
        date: '05-09-2018', position: 'Oslo', room: '104',
        note: '...'
    },
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\fengchao\Documents\GitHub\easyplanner\easy-planner\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map