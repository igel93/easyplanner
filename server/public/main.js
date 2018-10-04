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
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modify-event/modify-event.component */ "./src/app/modify-event/modify-event.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: _app_log_in_log_in_component__WEBPACK_IMPORTED_MODULE_2__["LogInComponent"] },
    { path: 'app-register-user', component: _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_7__["RegisterUserComponent"] },
    { path: 'calendar-view', component: _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_3__["CalendarViewComponent"] },
    { path: 'create-group-event', component: _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_4__["CreateGroupEventComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_5__["UserProfileComponent"] },
    { path: 'modify-event', component: _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_6__["ModifyEventComponent"] }
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
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modify-event/modify-event.component */ "./src/app/modify-event/modify-event.component.ts");
/* harmony import */ var _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./register-user/register-user.component */ "./src/app/register-user/register-user.component.ts");
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
                _register_user_register_user_component__WEBPACK_IMPORTED_MODULE_14__["RegisterUserComponent"],
                _calendar_view_calender_calender_component__WEBPACK_IMPORTED_MODULE_6__["CalenderComponent"],
                _create_group_event_create_group_event_component__WEBPACK_IMPORTED_MODULE_7__["CreateGroupEventComponent"],
                _calendar_view_calendar_view_component__WEBPACK_IMPORTED_MODULE_8__["CalendarViewComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_12__["UserProfileComponent"],
                _modify_event_modify_event_component__WEBPACK_IMPORTED_MODULE_13__["ModifyEventComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [_easy_planner_server_service__WEBPACK_IMPORTED_MODULE_11__["EasyPlannerServerService"]],
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

module.exports = "<div class=\"row\" style=\"text-align:center\">\r\n    <app-calender> </app-calender>\r\n</div>"

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

module.exports = ".date-wrap {\r\n    margin: 60px auto;\r\n    width: 400px;\r\n    height: 400px;\r\n    display: flex;\r\n    border: 1px solid #eee;\r\n    flex-direction: column;\r\n    box-shadow: 2px 2px 4px #ccc;\r\n}\r\n\r\n.date-wrap .date-head {\r\n    height: 70px;\r\n    flex-basis: 13%;\r\n    line-height: 70px;\r\n    font-family: serif;\r\n    font-size: 25px;\r\n    color: lightslategrey;\r\n    text-align: center;\r\n    border-bottom: 1px solid #aaa;\r\n}\r\n\r\n.date-head a {\r\n    text-decoration: none;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    color: deepskyblue;\r\n}\r\n\r\na.left-btn {\r\n    float: left;\r\n    margin-left: 30px;\r\n}\r\n\r\na.right-btn {\r\n    float: right;\r\n    margin-right: 30px;\r\n}\r\n\r\n.date-day {\r\n    flex-basis: 14%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    text-align: center;\r\n    font-size: 17px;\r\n    color: #666;\r\n    font-family: '黑体';\r\n}\r\n\r\n.date-body {\r\n    flex-basis: 87%;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n}\r\n\r\n.date-body .date-item {\r\n    flex-basis: 14%;\r\n    -ms-grid-row-align: center;\r\n        align-self: center;\r\n    text-align: center;\r\n    cursor: pointer;\r\n    color: lightslategray\r\n}\r\n\r\n.date-body .date-item:hover {\r\n    color: indianred;\r\n}\r\n\r\n.active {\r\n    background: deepskyblue;\r\n    color: white!important;\r\n    border-radius: 20px;\r\n}\r\n\r\n.event {\r\n    background: rgb(145, 211, 22);\r\n    color: white!important;\r\n    border-radius: 20px;\r\n}"

/***/ }),

/***/ "./src/app/calendar-view/calender/calender.component.html":
/*!****************************************************************!*\
  !*** ./src/app/calendar-view/calender/calender.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-5\">\r\n  <div class=\"date-wrap\">\r\n    <div class=\"date-head\">\r\n      <a (click)=\"goPrev()\" class=\"left-btn\">&lt;</a>{{dateObject.year}}-{{dateObject.month}}\r\n      <a class=\"right-btn\" (click)=\"goNext()\">&gt;</a>\r\n    </div>\r\n    <div class=\"date-body\">\r\n      <div class=\"date-day\">Sun</div>\r\n      <div class=\"date-day\">Mon</div>\r\n      <div class=\"date-day\">Tue</div>\r\n      <div class=\"date-day\">Wed</div>\r\n      <div class=\"date-day\">Thu</div>\r\n      <div class=\"date-day\">Fri</div>\r\n      <div class=\"date-day\">Sat</div>\r\n      <div *ngFor=\"let item of dateObject.datesArray,let i = index\" class=\"date-item\" [class.active]=\"item == dateObject.nowDay && dateObject.month==dateObject.nowMonth\"\r\n        [class.event]=\"flag[i]==1\" (click)='dateClickEvent(i,item)'>{{item}}</div>\r\n    </div>\r\n  </div>\r\n  <div>\r\n    <!-- <a>{{clickDate}}</a> -->\r\n  </div>\r\n</div>\r\n<div class=\"col-md-7\">\r\n  <div>\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li><a>Hi,{{name}}</a></li>\r\n        <li><a (click)=\"myProfileClick()\"> MyProfile </a></li>\r\n        <li><a routerLink=\"/login\">Logout</a></li>\r\n      </ul>\r\n    </div>\r\n    <h2>My meetings\r\n      <button class=\"btn btn-primary\" routerLink=\"/create-group-event\" [queryParams]=\"{key:key,name:name}\">Add New</button>\r\n    </h2>\r\n    <a *ngIf=\"success\">Delete {{message}} success!!!</a>\r\n    <hr>\r\n    <ul class=\"events\">\r\n      <li *ngFor=\"let event of events\">\r\n        <span>Date: {{event.year}}-{{event.month}}-{{event.day}} </span><br> Start Time: {{event.start_time}}<br> Ending\r\n        time: {{event.ending_time}} <br> Location:{{event.location}} <br> GroupName:{{event.group_name}} <br> GroupSize:{{event.group_size}}\r\n        <br> describtion:{{event.describtion}}\r\n        <br><button class=\"btn btn-primary\" (click)='deleteClick(event.event_id)'>Delete</button>\r\n        <button class=\"btn btn-primary\" (click)='modifyClick(event.event_id)'>Modify</button>\r\n        <hr>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
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
    function CalenderComponent(ref, activatedRoute, router, calendarService) {
        this.ref = ref;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.calendarService = calendarService;
        this.success = false;
        this.clickDate = [];
        this.selectedDate = [];
        this.events = [];
        this.nowDate = new Date();
        this.years = this.nowDate.getFullYear();
        this.yearStr = String(this.years);
        this.months = this.nowDate.getMonth() + 1;
        this.monthStr = String(this.months);
        this.days = this.nowDate.getDate();
        this.dayStr = String(this.days);
        this.calendarEvents = [];
        this.flag = [];
        var date = new Date();
        this.year = date.getFullYear();
        this.month = date.getMonth() + 1;
    }
    CalenderComponent.prototype.initFlag = function () {
        for (var i = 0; i < 42; i++) {
            this.flag[i] = 0;
        }
    };
    CalenderComponent.prototype.myProfileClick = function () {
        if (this.key != null) {
            this.router.navigate(["/user-profile"], { queryParams: { key: this.key } });
        }
    };
    /**
     * return last month data
     */
    CalenderComponent.prototype.goPrev = function () {
        var _this = this;
        this.success = false;
        this.calendarService.getEvents(this.key)
            .subscribe(function (events) {
            _this.calendarEvents = events;
            _this.dateObject = _this.getDatesOfMonth(_this.year, _this.month);
        });
        this.month--;
        if (this.month == 0) {
            this.month = 12;
            this.year--;
        }
        //console.log("month" + this.month)
        //console.log("flag values" + this.flag)
    };
    /**
     * //return next month data
     */
    CalenderComponent.prototype.goNext = function () {
        var _this = this;
        this.success = false;
        this.calendarService.getEvents(this.key)
            .subscribe(function (events) {
            _this.calendarEvents = events;
            _this.dateObject = _this.getDatesOfMonth(_this.year, _this.month);
        });
        this.month++;
        if (this.month == 13) {
            this.month = 1;
            this.year++;
        }
        // this.setFlag(this.year, this.month, this.dateObject)
        // console.log("flag length" + this.month)
        //console.log("flag values" + this.flag)
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
        var nowMonth = new Date().getMonth() + 1;
        var day = date.getDay();
        var lastDayOfLastMonth = new Date(year, month - 1, 0).getDate();
        var tempYear = year;
        var tempMonth = month;
        var pastDates = [];
        var nowDates = [];
        var nextDates = [];
        this.initFlag();
        //add last months'date
        for (var i = lastDayOfLastMonth; i > lastDayOfLastMonth - day; i--) {
            datesArray.unshift(i);
            pastDates.unshift(i);
        }
        //  console.log("last"+datesArray)
        //  console.log(pastDates)
        if (month == 1) {
            tempYear = year - 1;
            tempMonth = 12;
        }
        else {
            tempYear = year;
            tempMonth = month - 1;
        }
        for (var i = 0; i < pastDates.length; i++) {
            for (var j = 0; j < this.calendarEvents.length; j++) {
                if (this.calendarEvents[j].year == tempYear && this.calendarEvents[j].month == tempMonth && this.calendarEvents[j].day == pastDates[i]) {
                    this.flag[i] = 1;
                }
            }
        }
        //add this months'date
        var lastDayOfNowMonth = new Date(year, month, 0).getDate();
        for (var index = 1; index <= lastDayOfNowMonth; index++) {
            datesArray.push(index);
            nowDates.push(index);
        }
        //console.log("now"+nowDates)
        for (var i = 0; i < nowDates.length; i++) {
            for (var j = 0; j < this.calendarEvents.length; j++) {
                if (this.calendarEvents[j].year == year && this.calendarEvents[j].month == month && this.calendarEvents[j].day == nowDates[i]) {
                    //console.log('my test' + j + this.calendarEvents[j].year, year + 'month' + this.calendarEvents[j].month, month + 'day' + this.calendarEvents[j].day, nowDates[i])
                    this.flag[pastDates.length + i] = 1;
                }
            }
        }
        //add next months' date
        var countOfNextMonth = 42 - lastDayOfNowMonth - day;
        for (var index = 1; index <= countOfNextMonth; index++) {
            datesArray.push(index);
            nextDates.push(index);
        }
        // console.log("next" + datesArray)
        // console.log("changdu" + datesArray.length)
        if (month == 12) {
            tempYear = year + 1;
            tempMonth = 1;
        }
        else {
            tempYear = year;
            tempMonth = month + 1;
        }
        for (var i = 0; i < nextDates.length; i++) {
            for (var j = 0; j < this.calendarEvents.length; j++) {
                if (this.calendarEvents[j].year == tempYear && this.calendarEvents[j].month == tempMonth && this.calendarEvents[j].day == nextDates[i]) {
                    this.flag[pastDates.length + nowDates.length + i] = 1;
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
        };
    };
    /**
     * this click method will retrun the cilcked date for search
     * @param index
     * @param item
     */
    CalenderComponent.prototype.dateClickEvent = function (index, item) {
        var _this = this;
        this.selectedDate = [];
        this.success = false;
        if (this.dateObject.month == 12 && item < 14 && index > 28) {
            this.selectedDate[0] = this.dateObject.year + 1;
        }
        else {
            this.selectedDate[0] = this.dateObject.year;
        }
        if (item > 14 && index < 13 && this.dateObject.month != 1) {
            this.selectedDate[1] = this.dateObject.month - 1;
            this.selectedDate[2] = item;
            this.clickDate = this.selectedDate;
            this.yearStr = String(this.clickDate[0]);
            this.monthStr = String(this.clickDate[1]);
            this.dayStr = String(this.clickDate[2]);
            this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
                .subscribe(function (events) {
                _this.events = events;
            });
            return;
        }
        if (item > 14 && index < 13 && this.dateObject.month == 1) {
            this.selectedDate[1] = 12;
            this.selectedDate[2] = item;
            this.clickDate = this.selectedDate;
            this.yearStr = String(this.clickDate[0]);
            this.monthStr = String(this.clickDate[1]);
            this.dayStr = String(this.clickDate[2]);
            this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
                .subscribe(function (events) {
                _this.events = events;
            });
            return;
        }
        if (item < 14 && index > 28 && this.dateObject.month != 12) {
            this.selectedDate[1] = this.dateObject.month + 1;
            this.selectedDate[2] = item;
            this.clickDate = this.selectedDate;
            this.yearStr = String(this.clickDate[0]);
            this.monthStr = String(this.clickDate[1]);
            this.dayStr = String(this.clickDate[2]);
            this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
                .subscribe(function (events) {
                _this.events = events;
            });
            return;
        }
        if (item < 14 && index > 28 && this.dateObject.month == 12) {
            this.selectedDate[1] = 1;
            this.selectedDate[2] = item;
            this.clickDate = this.selectedDate;
            this.yearStr = String(this.clickDate[0]);
            this.monthStr = String(this.clickDate[1]);
            this.dayStr = String(this.clickDate[2]);
            this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
                .subscribe(function (events) {
                _this.events = events;
            });
            return;
        }
        this.selectedDate[1] = this.dateObject.month;
        this.selectedDate[2] = item;
        this.clickDate = this.selectedDate;
        this.yearStr = String(this.clickDate[0]);
        this.monthStr = String(this.clickDate[1]);
        this.dayStr = String(this.clickDate[2]);
        this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
            .subscribe(function (events) {
            _this.events = events;
        });
    };
    CalenderComponent.prototype.deleteClick = function (event_id) {
        var _this = this;
        this.calendarService.deleteEvent(event_id)
            .subscribe(function (result) {
            if (result.affectedRows != 0) {
                _this.success = true;
                _this.message = event_id;
            }
        });
    };
    CalenderComponent.prototype.modifyClick = function (event_id) {
        if (event_id != null) {
            this.router.navigate(['/modify-event'], { queryParams: { event_id: event_id, key: this.key, name: this.name } });
        }
    };
    CalenderComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.key = this.activatedRoute.snapshot.queryParamMap.get('key')
        // this.name = this.activatedRoute.snapshot.queryParamMap.get('name')
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.name = params['name'];
            _this.key = params['key'];
        });
        this.calendarService.getEventsByDate(this.key, this.yearStr, this.monthStr, this.dayStr)
            .subscribe(function (events) {
            _this.events = events;
            // console.log("result is" + this.events.length)
        });
        //console.log("key is" + this.key)
        this.calendarService.getEvents(this.key)
            .subscribe(function (events) {
            _this.calendarEvents = events;
            _this.dateObject = _this.getDatesOfMonth(_this.year, _this.month);
            // console.log(this.calendarEvents[0].year, this.calendarEvents[0].month, this.calendarEvents[0].day)
            // console.log(this.calendarEvents[1].year, this.calendarEvents[1].month, this.calendarEvents[1].day)
            // console.log(this.calendarEvents[2].year, this.calendarEvents[2].month, this.calendarEvents[2].day)
            // console.log(this.calendarEvents[3].year, this.calendarEvents[3].month, this.calendarEvents[3].day)
            // console.log(this.calendarEvents[4].year, this.calendarEvents[4].month, this.calendarEvents[4].day)
        });
        // console.log("flag length" + this.flag.length)
        //console.log("flag values" + this.flag)
    };
    CalenderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-calender',
            template: __webpack_require__(/*! ./calender.component.html */ "./src/app/calendar-view/calender/calender.component.html"),
            styles: [__webpack_require__(/*! ./calender.component.css */ "./src/app/calendar-view/calender/calender.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__["EasyPlannerServerService"]])
    ], CalenderComponent);
    return CalenderComponent;
}());



/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\r\n\r\nApplication-wide Styles\r\n    h1 {\r\n      color: #369;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-size: 250%;\r\n    }\r\n    h2, h3 {\r\n      color: #444;\r\n      font-family: Arial, Helvetica, sans-serif;\r\n      font-weight: lighter;\r\n    }\r\n    body {\r\n      margin: 2em;\r\n    }\r\n    body, input[text], button {\r\n      color: #888;\r\n      font-family: Cambria, Georgia;\r\n    }\r\n    /* everywhere else */\r\n    /*\r\n      {\r\n      font-family: Arial, Helvetica, sans-serif;\r\n    }\r\n\r\n    /* .ng-valid[required], .ng-valid.required  {\r\n     border-left: 5px solid #42A948; /* green */\r\n    /* } */\r\n    /*\r\n    .ng-invalid:not(form)  {\r\n      border-left: 5px solid #a94442; /* red */\r\n    /* } \r\n\r\n    .events {\r\n      margin: 0 0 2em 0;\r\n      list-style-type: none;\r\n      padding: 0;\r\n      width: 50em;\r\n    }\r\n    \r\n    .events li {\r\n      cursor: pointer;\r\n      position: relative;\r\n      left: 0;\r\n      background-color: #EEE;\r\n      margin: .5em;\r\n      padding: .1em 0;\r\n      height: 1.6em;\r\n      border-radius: 4px;\r\n    }\r\n    \r\n    \r\n    .li .text {\r\n      position: relative;\r\n      top: -3px;\r\n    }\r\n\r\n    .events .events {\r\n      display: inline-block;\r\n      font-size: small;\r\n      color: white;\r\n      padding: 0.8em 0.7em 0 0.7em;\r\n      background-color: #607D8B;\r\n      line-height: 1em;\r\n      position: relative;\r\n      left: -1px;\r\n      top: -4px;\r\n      height: 1.8em;\r\n      margin-right: .8em;\r\n      border-radius: 4px 0 0 4px;\r\n    } */"

/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 style=\"text-align:center\">Create Event </h3>\r\n  <br>\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit(groupEventForm.value)\" #groupEventForm=\"ngForm\">\r\n      <div>\r\n        <label for=\"year\">Year</label>\r\n        <input type=\"text\" value=\"year\" name=\"year\" required [(ngModel)]=year>\r\n      </div>\r\n      <div>\r\n        <label for=\"month\">Month</label>\r\n        <input type=\"text\" value=\"month\" name=\"month\" required [(ngModel)]=month>\r\n      </div>\r\n      <div>\r\n        <label for=\"day\">Day</label>\r\n        <input type=\"text\" value=\"day\" name=\"day\" required [(ngModel)]=day>\r\n      </div>\r\n      <div>\r\n        <label for=\"start_time\">Start time:</label>\r\n        <input type=\"text\" value=\"start_time\" name=\"start_time\" required [(ngModel)]=start_time>\r\n      </div>\r\n      <div>\r\n        <label for=\"ending_time\">Ending time:</label>\r\n        <input type=\"text\" value=\"ending_time\" name=\"ending_time\" required [(ngModel)]=ending_time>\r\n      </div>\r\n      <div>\r\n        <label for=\"location\">Location:</label>\r\n        <input type=\"text\" value=\"location\" name=\"location\" required [(ngModel)]=location>\r\n      </div>\r\n      <div>\r\n        <label for=\"group_name\">Group name:</label>\r\n        <input type=\"text\" value=\"group_name\" name=\"group_name\" required [(ngModel)]=group_name>\r\n      </div>\r\n      <div>\r\n        <label for=\"group_size\">Group size:</label>\r\n        <input type=\"text\" value=\"group_size\" name=\"group_size\" required [(ngModel)]=group_size>\r\n      </div>\r\n      <div>\r\n        <label for=\"describtion\">describtion:</label>\r\n        <textarea rows=\"8\" cols=\"30\" value={{event.describtion}} name=describtion [(ngModel)]=describtion name=describtion></textarea>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n        <a>{{warning}}</a>\r\n      </div>\r\n      <div>\r\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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
    function CreateGroupEventComponent(activatedRoute, router, calendarService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.calendarService = calendarService;
        this.user = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
        this.event = {
            event_id: null,
            year: null,
            month: null,
            day: null,
            start_time: null,
            ending_time: null,
            location: null,
            group_name: null,
            group_size: null,
            describtion: null,
            user_id: this.key
        };
    }
    CreateGroupEventComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (value.year == null) { }
        else {
            this.event.year = value.year;
        }
        if (value.month == null) { }
        else {
            this.event.month = value.month;
        }
        if (value.day == null) { }
        else {
            this.event.day = value.day;
        }
        if (value.start_time == null) { }
        else {
            this.event.start_time = value.start_time;
        }
        if (value.ending_time == null) { }
        else {
            this.event.ending_time = value.ending_time;
        }
        if (value.location == null) { }
        else {
            this.event.location = value.location;
        }
        if (value.group_name == null) { }
        else {
            this.event.group_name = value.group_name;
        }
        if (value.group_size == null) { }
        else {
            this.event.group_size = value.group_size;
        }
        if (value.describtion == null) { }
        else {
            this.event.describtion = value.describtion;
        }
        this.event.user_id = this.key;
        console.log(this.event);
        this.calendarService.addEvent(this.event)
            .subscribe(function (result) {
            if (result.affectedRows !== 0) {
                _this.router.navigate(['/calendar-view'], { queryParams: { name: _this.name, key: _this.key } });
            }
        });
    };
    CreateGroupEventComponent.prototype.cancelClick = function () {
        this.router.navigate(['/calendar-view'], { queryParams: { name: this.name, key: this.key } });
    };
    CreateGroupEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.name = params['name'];
            _this.key = params['key'];
        });
    };
    CreateGroupEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create-group-event',
            template: __webpack_require__(/*! ./create-group-event.component.html */ "./src/app/create-group-event/create-group-event.component.html"),
            styles: [__webpack_require__(/*! ./create-group-event.component.css */ "./src/app/create-group-event/create-group-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__["EasyPlannerServerService"]])
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
    EasyPlannerServerService.prototype.getUser = function (userName, password) {
        // FIXME: ensure that this is always used by login
        return this.http.get(this.url + 'login/' + userName + '/' + password);
    };
    EasyPlannerServerService.prototype.getUserByID = function (user_id) {
        return this.http.get(this.url + 'login/' + user_id);
    };
    EasyPlannerServerService.prototype.addUser = function (user) {
        return this.http.post(this.url + 'login/', user, httpOptions);
    };
    EasyPlannerServerService.prototype.updateUser = function (user) {
        return this.http.put(this.url + 'login/' + user.user_id, user, httpOptions);
    };
    /**
     * those methods are used to access the event table
     * @param user_id this is a forienkey in event table
     */
    EasyPlannerServerService.prototype.getEvents = function (user_id) {
        return this.http.get(this.url + 'calender-view/' + user_id);
    };
    EasyPlannerServerService.prototype.getEventByID = function (event_id) {
        return this.http.get(this.url + 'calender-view/modify-event/' + event_id);
    };
    EasyPlannerServerService.prototype.getEventsByDate = function (user_id, year, month, day) {
        return this.http.get(this.url + 'calender-view/' + user_id + '/' + year + '/' + month + '/' + day);
    };
    EasyPlannerServerService.prototype.addEvent = function (event) {
        return this.http.post(this.url + 'calender-view/', event, httpOptions);
    };
    EasyPlannerServerService.prototype.updateEvent = function (event) {
        return this.http.put(this.url + 'calender-view/', event, httpOptions);
    };
    EasyPlannerServerService.prototype.deleteEvent = function (event_id) {
        return this.http.delete(this.url + 'calender-view/' + event_id);
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

module.exports = "<div style=\"text-align:center\">\r\n  <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\r\n    <div>\r\n      <label>USER NAME:</label>\r\n      <input type=\"text\" name=username [(ngModel)]=username #usernameField=\"ngModel\" required>\r\n      <!-- <input type=\"text\" (input)=\"onUpdateUserName($event)\" required> -->\r\n    </div>\r\n    \r\n    <div>\r\n      <label >PASSWORD:</label>\r\n      <input type=\"password\"  name=password [(ngModel)]=password #passwordField=\"ngModel\" required>\r\n      <!-- <input type=\"password\" (input)=\"onUpdatePassword($event)\" required> -->\r\n    </div>\r\n    <div *ngIf=valid>\r\n    <div *ngIf=\"usernameField.invalid && usernameField.errors.required\">\r\n      Username is required.\r\n    </div>\r\n    <div *ngIf=\"passwordField.invalid && passwordField.errors.required\">\r\n      Password is required.\r\n    </div>\r\n    \r\n    </div>\r\n\r\n    <hr>\r\n    <a>{{warning}}</a>\r\n    <div>\r\n      <button class=\"btn btn-primary\" type=\"submit\" (click)=\"onSubmit()\">Confirm</button>\r\n      <a routerLink=\"/app-register-user\" type=\"register\" class=\"btn btn-link\">Sign Up</a>\r\n    </div>\r\n  </form>\r\n</div>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
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
    function LogInComponent(calendarService, router) {
        this.calendarService = calendarService;
        this.router = router;
        this.user = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
        this.valid = false;
    }
    LogInComponent.prototype.ngOnInit = function () { };
    LogInComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (value.password != null && value.username != null) {
            this.calendarService.getUser(value.username, value.password)
                .subscribe(function (user) {
                _this.user = user;
                if (value.password === _this.user.password) {
                    _this.router.navigate(["/calendar-view"], { queryParams: { name: _this.user.name, key: _this.user.user_id } });
                }
                else {
                    _this.warning = "Username or Password incorrect, please try again.";
                }
            });
        }
        else {
            this.valid = true;
        }
    };
    LogInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-log-in',
            template: __webpack_require__(/*! ./log-in.component.html */ "./src/app/log-in/log-in.component.html"),
            styles: [__webpack_require__(/*! ./log-in.component.css */ "./src/app/log-in/log-in.component.css")]
        }),
        __metadata("design:paramtypes", [_easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__["EasyPlannerServerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LogInComponent);
    return LogInComponent;
}());



/***/ }),

/***/ "./src/app/modify-event/modify-event.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modify-event/modify-event.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modify-event/modify-event.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modify-event/modify-event.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 style=\"text-align:center\">Modify Event</h3>\r\n  <br>\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit(profileForm.value)\" #profileForm=\"ngForm\">\r\n      <table align='center'>\r\n        <tbody>\r\n          <tr>\r\n            <td> <label>Date:</label></td>\r\n            <td> <label>{{event.year}}--{{event.month}}--{{event.day}}</label></td>\r\n          </tr>\r\n          <!-- <a>{{warning1}}</a> -->\r\n          <tr>\r\n            <td> <label>Start time:</label></td>\r\n            <td><input type=\"time\" value={{event.start_time}} required [(ngModel)]=start_time name=start_time></td>\r\n          </tr>\r\n          <tr>\r\n            <td> <label>Ending time:</label></td>\r\n            <td><input type=\"time\" value={{event.ending_time}} required [(ngModel)]=ending_time name=ending_time></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Location:</label></td>\r\n            <td><input type=\"text\" value={{event.location}} required [(ngModel)]=location name=location></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Group name:</label></td>\r\n            <td><input type=\"text\" value={{event.group_name}} [(ngModel)]=group_name name=group_name></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Group size:</label></td>\r\n            <td><input type=\"number\" value={{event.group_size}} [(ngModel)]=group_size name=group_size></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>describtion:</label></td>\r\n            <td>\r\n              <textarea rows=\"8\" cols=\"30\" value={{event.describtion}} name=describtion [(ngModel)]=describtion name=describtion></textarea>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <div style=\"text-align:center\">\r\n        <a>{{warning}}</a>\r\n        <div>\r\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/modify-event/modify-event.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modify-event/modify-event.component.ts ***!
  \********************************************************/
/*! exports provided: ModifyEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModifyEventComponent", function() { return ModifyEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModifyEventComponent = /** @class */ (function () {
    function ModifyEventComponent(activatedRoute, router, calendarService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.calendarService = calendarService;
        this.event = {
            event_id: null,
            year: null,
            month: null,
            day: null,
            start_time: null,
            ending_time: null,
            location: null,
            group_name: null,
            group_size: null,
            describtion: null,
            user_id: null
        };
    }
    //warning1: string
    ModifyEventComponent.prototype.onSubmit = function (value) {
        var _this = this;
        //if (value.ending_time < value.start_time) { this.warning1 = "Ending time can not less than start time " }
        if (value.start_time == null) { }
        else {
            this.event.start_time = value.start_time;
        }
        if (value.ending_time == null) { }
        else {
            this.event.ending_time = value.ending_time;
        }
        if (value.location == null) { }
        else {
            this.event.location = value.location;
        }
        if (value.group_name == null) { }
        else {
            this.event.group_name = value.group_name;
        }
        if (value.group_size == null) { }
        else {
            this.event.group_size = value.group_size;
        }
        if (value.describtion == null) { }
        else {
            this.event.describtion = value.describtion;
        }
        console.log(this.event);
        this.calendarService.updateEvent(this.event)
            .subscribe(function (result) {
            if (result.affectedRows != 0) {
                _this.router.navigate(["/calendar-view"], { queryParams: { name: _this.name, key: _this.key } });
            }
        });
    };
    ModifyEventComponent.prototype.cancelClick = function () {
        this.router.navigate(["/calendar-view"], { queryParams: { name: this.name, key: this.key } });
    };
    ModifyEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.event.event_id = params['event_id'];
            _this.key = params['key'];
            _this.name = params['name'];
        });
        this.calendarService.getEventByID(this.event.event_id)
            .subscribe(function (result) {
            if (result) {
                _this.event = result;
            }
        });
    };
    ModifyEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modify-event',
            template: __webpack_require__(/*! ./modify-event.component.html */ "./src/app/modify-event/modify-event.component.html"),
            styles: [__webpack_require__(/*! ./modify-event.component.css */ "./src/app/modify-event/modify-event.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__["EasyPlannerServerService"]])
    ], ModifyEventComponent);
    return ModifyEventComponent;
}());



/***/ }),

/***/ "./src/app/register-user/register-user.component.css":
/*!***********************************************************!*\
  !*** ./src/app/register-user/register-user.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/register-user/register-user.component.html":
/*!************************************************************!*\
  !*** ./src/app/register-user/register-user.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 style=\"text-align:center\">Register user</h3>\r\n  <br>\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit(registerUserForm.value)\" #registerUserForm=\"ngForm\">\r\n      <div>\r\n        <label for=\"student_id\">Student ID</label>\r\n        <input type=\"text\" value=\"student_id\" name=\"student_id\" [(ngModel)]=student_id required>\r\n      </div>\r\n      <div>\r\n        <label for=\"name\">Name</label>\r\n        <input type=\"text\" value=\"name\" name=\"name\"  [(ngModel)]=name required>\r\n      </div>\r\n      <div>\r\n        <label for=\"password\">Password</label>\r\n        <input type=\"text\" value=\"password1\" name=\"password1\" [(ngModel)]=password1 required>\r\n      </div>\r\n      <div>\r\n        <label for=\"password\">Password Validation</label>\r\n        <input type=\"text\" value=\"password2\" name=\"password2\" [(ngModel)]=password2 required>\r\n      </div>\r\n      <div>\r\n        <label for=\"email\">Email</label>\r\n        <input type=\"text\" value=\"email\" name=\"email\" [(ngModel)]=email required>\r\n      </div>\r\n      <div style=\"text-align:center\">\r\n        <a>{{warning}}</a>\r\n      </div>\r\n      <div>\r\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Register</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/register-user/register-user.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/register-user/register-user.component.ts ***!
  \**********************************************************/
/*! exports provided: RegisterUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterUserComponent", function() { return RegisterUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(calendarService, router) {
        this.calendarService = calendarService;
        this.router = router;
        this.user = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
        this.result = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
        this.uid = null;
    }
    RegisterUserComponent.prototype.ngOnInit = function () { };
    RegisterUserComponent.prototype.onSubmit = function (value) {
        var _this = this;
        //if (value.ending_time < value.start_time) { this.warning1 = "Ending time can not less than start time " }
        // this.user.student_id = value.student_id;
        // this.user.name = value.name;
        // this.user.email = value.email; 
        this.test = 0;
        this.warning = " ";
        if (value.student_id == null) { }
        else {
            this.user.student_id = value.student_id;
            this.test = this.test + 1;
        }
        if (value.name == null) { }
        else {
            this.user.name = value.name;
            this.test = this.test + 1;
        }
        if (value.email == null) { }
        else {
            this.user.email = value.email;
            this.test = this.test + 1;
        }
        if (value.password1 == value.password2 && value.password1 != null) {
            this.user.password = value.password1;
            this.test = this.test + 1;
        }
        else {
            this.warning = this.warning + "The password has to be same one! ";
        }
        if (this.test == 4) {
            this.calendarService.getUser(this.user.student_id, this.user.password)
                .subscribe(function (result) {
                _this.result = result;
                console.log("user:" + _this.user.student_id);
                if (!Object(util__WEBPACK_IMPORTED_MODULE_3__["isNull"])(result)) {
                    _this.warning = "The username already exist!";
                }
                else {
                    _this.calendarService.addUser(_this.user)
                        .subscribe(function (user) {
                        if (user.affectedRows !== 0) {
                            _this.router.navigate(['/login']);
                        }
                    });
                }
            });
            // this.calendarService.addUser(this.user)
            // .subscribe(user => {
            //   if (user.affectedRows !== 0) {this.router.navigate(['/login']);}
            // });
        }
        else {
            this.warning = this.warning + "The register information is not allowed empty!  ";
        }
    };
    RegisterUserComponent.prototype.cancelClick = function () {
        this.router.navigate(['/login']);
    };
    RegisterUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register-user',
            template: __webpack_require__(/*! ./register-user.component.html */ "./src/app/register-user/register-user.component.html"),
            styles: [__webpack_require__(/*! ./register-user.component.css */ "./src/app/register-user/register-user.component.css")]
        }),
        __metadata("design:paramtypes", [_easy_planner_server_service__WEBPACK_IMPORTED_MODULE_1__["EasyPlannerServerService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <h3 style=\"text-align:center\">Change Password</h3>\r\n  <br>\r\n  <div>\r\n    <form (ngSubmit)=\"onSubmit(profileForm.value)\" #profileForm=\"ngForm\">\r\n      <table align='center'>\r\n        <tbody>\r\n          <tr>\r\n            <td> <label>Current:</label></td>\r\n            <td> <input type=\"text\" required [(ngModel)]=oldPassword name=oldPassword></td>\r\n          </tr>\r\n          <tr>\r\n            <td> <label>New:</label></td>\r\n            <td><input type=\"text\" required [(ngModel)]=newPassword1 name=newPassword1></td>\r\n          </tr>\r\n          <tr>\r\n            <td><label>Retype new:</label></td>\r\n            <td><input type=\"text\" required [(ngModel)]=newPassword2 name=newPassword2></td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n      <hr>\r\n      <div style=\"text-align:center\">\r\n        <a>{{warning}}</a>\r\n        <div>\r\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\r\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../easy-planner-server.service */ "./src/app/easy-planner-server.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(router, activatedRoute, service) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.service = service;
        this.user = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
    }
    UserProfileComponent.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.user.password == value.oldPassword) {
            if (value.newPassword1 == value.newPassword2) {
                this.user.password = value.newPassword1;
                this.service.updateUser(this.user)
                    .subscribe(function (result) {
                    if (result.affectedRows != 0) {
                        _this.router.navigate(["/calendar-view"], { queryParams: { name: _this.user.name, key: _this.user.user_id } });
                    }
                    else {
                        _this.warning = "update field!";
                    }
                });
            }
            else {
                this.warning = "Please enter same new password twice!";
            }
        }
        else {
            this.warning = "Please enter correct old password!";
        }
    };
    UserProfileComponent.prototype.cancelClick = function () {
        this.router.navigate(["/calendar-view"], { queryParams: { name: this.user.name, key: this.user.user_id } });
    };
    UserProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams.subscribe(function (params) {
            _this.user.user_id = params['key'];
        });
        this.service.getUserByID(this.user.user_id)
            .subscribe(function (user) {
            _this.user = user;
        });
    };
    UserProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _easy_planner_server_service__WEBPACK_IMPORTED_MODULE_2__["EasyPlannerServerService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
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