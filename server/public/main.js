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

module.exports = "h3{\n    color:darkslateblue;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n<!-- <app-log-in></app-log-in>\n<app-calendar-view></app-calendar-view>\n<app-create-group-event></app-create-group-event> -->\n"

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

module.exports = "\n"

/***/ }),

/***/ "./src/app/calendar-view/calendar-view.component.html":
/*!************************************************************!*\
  !*** ./src/app/calendar-view/calendar-view.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" style=\"text-align:center\">\n    <app-calender> </app-calender>\n</div>"

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

module.exports = ".date-wrap {\n    margin: 60px auto;\n    width: 400px;\n    height: 400px;\n    display: flex;\n    border: 1px solid #eee;\n    flex-direction: column;\n    box-shadow: 2px 2px 4px #ccc;\n}\n\n.date-wrap .date-head {\n    height: 70px;\n    flex-basis: 13%;\n    line-height: 70px;\n    font-family: serif;\n    font-size: 25px;\n    color: lightslategrey;\n    text-align: center;\n    border-bottom: 1px solid #aaa;\n}\n\n.date-head a {\n    text-decoration: none;\n    font-weight: bold;\n    cursor: pointer;\n    color: deepskyblue;\n}\n\na.left-btn {\n    float: left;\n    margin-left: 30px;\n}\n\na.right-btn {\n    float: right;\n    margin-right: 30px;\n}\n\n.date-day {\n    flex-basis: 14%;\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-align: center;\n    font-size: 17px;\n    color: #666;\n    font-family: '黑体';\n}\n\n.date-body {\n    flex-basis: 87%;\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n}\n\n.date-body .date-item {\n    flex-basis: 14%;\n    -ms-grid-row-align: center;\n        align-self: center;\n    text-align: center;\n    cursor: pointer;\n    color: lightslategray\n}\n\n.date-body .date-item:hover {\n    color: indianred;\n}\n\n.active {\n    background: deepskyblue;\n    color: white!important;\n    border-radius: 20px;\n}\n\n.event {\n    background: rgb(145, 211, 22);\n    color: white!important;\n    border-radius: 20px;\n}"

/***/ }),

/***/ "./src/app/calendar-view/calender/calender.component.html":
/*!****************************************************************!*\
  !*** ./src/app/calendar-view/calender/calender.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-5\">\n  <div class=\"date-wrap\" *ngIf=\"dateObject\">\n    <div class=\"date-head\">\n      <a (click)=\"goPrev()\" class=\"left-btn\">&lt;</a>{{dateObject.year}}-{{dateObject.month}}\n      <a class=\"right-btn\" (click)=\"goNext()\">&gt;</a>\n    </div>\n    <div class=\"date-body\">\n      <div class=\"date-day\">Sun</div>\n      <div class=\"date-day\">Mon</div>\n      <div class=\"date-day\">Tue</div>\n      <div class=\"date-day\">Wed</div>\n      <div class=\"date-day\">Thu</div>\n      <div class=\"date-day\">Fri</div>\n      <div class=\"date-day\">Sat</div>\n      <div *ngFor=\"let item of dateObject.datesArray,let i = index\" class=\"date-item\" [class.active]=\"item == dateObject.nowDay && dateObject.monthArray[i]==dateObject.nowMonth\"\n        [class.event]=\"flag[i]==1\" (click)='dateClickEvent(i,item)'>{{item}}</div>\n    </div>\n  </div>\n  <div>\n    <!-- <a>{{clickDate}}</a> -->\n  </div>\n</div>\n<div class=\"col-md-7\">\n  <div>\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a>Hi,{{name}}</a></li>\n        <li><a (click)=\"myProfileClick()\"> MyProfile </a></li>\n        <li><a routerLink=\"/login\">Logout</a></li>\n      </ul>\n    </div>\n    <h2>My meetings\n      <button class=\"btn btn-primary\" routerLink=\"/create-group-event\" [queryParams]=\"{key:key,name:name}\">Add New</button>\n    </h2>\n    <a *ngIf=\"success\">Delete {{message}} success!!!</a>\n    <hr>\n    <ul class=\"events\">\n      <li *ngFor=\"let event of events\">\n        <span>Date: {{event.year}}-{{event.month}}-{{event.day}} </span><br> Start Time: {{event.start_time}}<br> Ending\n        time: {{event.ending_time}} <br> Location:{{event.location}} <br> GroupName:{{event.group_name}} <br> GroupSize:{{event.group_size}}\n        <br> describtion:{{event.describtion}}\n        <br><button class=\"btn btn-primary\" (click)='deleteClick(event.event_id)'>Delete</button>\n        <button class=\"btn btn-primary\" (click)='modifyClick(event.event_id)'>Modify</button>\n        <hr>\n      </li>\n    </ul>\n  </div>\n</div>\n<router-outlet></router-outlet>"

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
        var monthArray = [];
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
            monthArray.unshift(month - 1);
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
            monthArray.push(month);
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
            monthArray.push(month + 1);
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
            monthArray: monthArray
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
                _this.ngOnInit();
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

module.exports = "/* @import url('https://unpkg.com/bootstrap@3.3.7/dist/css/bootstrap.min.css');\n\nApplication-wide Styles\n    h1 {\n      color: #369;\n      font-family: Arial, Helvetica, sans-serif;\n      font-size: 250%;\n    }\n    h2, h3 {\n      color: #444;\n      font-family: Arial, Helvetica, sans-serif;\n      font-weight: lighter;\n    }\n    body {\n      margin: 2em;\n    }\n    body, input[text], button {\n      color: #888;\n      font-family: Cambria, Georgia;\n    }\n    /* everywhere else */\n    /*\n      {\n      font-family: Arial, Helvetica, sans-serif;\n    }\n\n    /* .ng-valid[required], .ng-valid.required  {\n     border-left: 5px solid #42A948; /* green */\n    /* } */\n    /*\n    .ng-invalid:not(form)  {\n      border-left: 5px solid #a94442; /* red */\n    /* } \n\n    .events {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 50em;\n    }\n    \n    .events li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .1em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    \n    \n    .li .text {\n      position: relative;\n      top: -3px;\n    }\n\n    .events .events {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    } */"

/***/ }),

/***/ "./src/app/create-group-event/create-group-event.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/create-group-event/create-group-event.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <h3 style=\"text-align:center\">Create Event </h3>\n  <br>\n  <div>\n    <form (ngSubmit)=\"onSubmit(groupEventForm.value)\" #groupEventForm=\"ngForm\">\n      <div>\n        <label for=\"year\">Year</label>\n        <input type=\"text\" value=\"year\" name=\"year\" required [(ngModel)]=year>\n      </div>\n      <div>\n        <label for=\"month\">Month</label>\n        <input type=\"text\" value=\"month\" name=\"month\" required [(ngModel)]=month>\n      </div>\n      <div>\n        <label for=\"day\">Day</label>\n        <input type=\"text\" value=\"day\" name=\"day\" required [(ngModel)]=day>\n      </div>\n      <div>\n        <label for=\"start_time\">Start time:</label>\n        <input type=\"text\" value=\"start_time\" name=\"start_time\" required [(ngModel)]=start_time>\n      </div>\n      <div>\n        <label for=\"ending_time\">Ending time:</label>\n        <input type=\"text\" value=\"ending_time\" name=\"ending_time\" required [(ngModel)]=ending_time>\n      </div>\n      <div>\n        <label for=\"location\">Location:</label>\n        <input type=\"text\" value=\"location\" name=\"location\" required [(ngModel)]=location>\n      </div>\n      <div>\n        <label for=\"group_name\">Group name:</label>\n        <input type=\"text\" value=\"group_name\" name=\"group_name\" required [(ngModel)]=group_name>\n      </div>\n      <div>\n        <label for=\"group_size\">Group size:</label>\n        <input type=\"text\" value=\"group_size\" name=\"group_size\" required [(ngModel)]=group_size>\n      </div>\n      <div>\n        <label for=\"describtion\">describtion:</label>\n        <textarea rows=\"8\" cols=\"30\" value={{event.describtion}} name=describtion [(ngModel)]=describtion name=describtion></textarea>\n      </div>\n      <div style=\"text-align:center\">\n        <a>{{warning}}</a>\n      </div>\n      <div>\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n"

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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
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
        this.url = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiUrl;
    }
    EasyPlannerServerService.prototype.verifyLogin = function (userName, password) {
        // FIXME: ensure that this is always used by login
        return this.http.post(this.url + 'login/verify', { userName: userName, password: password });
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
    EasyPlannerServerService.prototype.getEventByID = function (event_id, user_id) {
        return this.http.get(this.url + 'calender-view/modify-event/' + event_id);
    };
    EasyPlannerServerService.prototype.getEventsByDate = function (user_id, year, month, day) {
        return this.http.get(this.url + 'calender-view/' + user_id + '/' + year + '/' + month + '/' + day);
    };
    EasyPlannerServerService.prototype.addEvent = function (event) {
        return this.http.post(this.url + 'calender-view/', event, httpOptions);
    };
    EasyPlannerServerService.prototype.updateEvent = function (event, user_id) {
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

module.exports = "<nav  class=\"navbar navbar-default\">\n    <div class=\"container-fluid\">\n      <div  class=\"navbar-header\">\n        <h3><img width=\"60\" alt=\"EasyPlannerLogo\" src=\"./src/image/ep-logo.png\" /> Welcome to Easy Planner!\n        </h3>\n      </div>\n    <div class=\"collapse navbar-collapse\" *ngIf='false'>\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li><a>Hi,{{name}}</a></li>\n        <li><a>Logout</a></li>\n      </ul>\n    </div>\n    </div>\n  </nav>\n"

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

module.exports = "<div style=\"text-align:center\">\n  <form (ngSubmit)=\"onSubmit(loginForm.value)\" #loginForm=\"ngForm\">\n    <div>\n      <label>USER NAME:</label>\n      <input type=\"text\" name=username [(ngModel)]=username #usernameField=\"ngModel\" required>\n      <!-- <input type=\"text\" (input)=\"onUpdateUserName($event)\" required> -->\n    </div>\n    \n    <div>\n\n      <label >PASSWORD:</label>\n      <input type=\"password\"  name=password [(ngModel)]=password #passwordField=\"ngModel\" required>\n     \n    </div>\n\n    <div *ngIf=valid>\n\n    <div *ngIf=\"usernameField.invalid && usernameField.errors.required\">\n      Username is required.\n    </div>\n    <div *ngIf=\"passwordField.invalid && passwordField.errors.required\">\n      Password is required.\n    </div>\n\n    </div>\n\n    <hr>\n    <a>{{warning}}</a>\n    <div>\n      <button\n        class=\"btn btn-primary\"\n        type=\"submit\"\n        (click)=\"onSubmit({'username':username,'password':password})\">Confirm</button>\n      <a routerLink=\"/app-register-user\" type=\"register\" class=\"btn btn-link\">Sign Up</a>\n    </div>\n  </form>\n</div>\n<router-outlet></router-outlet>"

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
            this.calendarService.verifyLogin(value.username, value.password)
                .subscribe(function (user) {
                _this.user = user;
                _this.router.navigate(["/calendar-view"], { queryParams: { name: _this.user.name, key: _this.user.user_id } });
            }, function (err) { return _this.warning = err.error; });
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

module.exports = "<div>\n  <h3 style=\"text-align:center\">Modify Event</h3>\n  <br>\n  <div>\n    <form (ngSubmit)=\"onSubmit(profileForm.value)\" #profileForm=\"ngForm\">\n      <table align='center'>\n        <tbody>\n          <tr>\n            <td> <label>Date:</label></td>\n            <td> <label>{{event.year}}--{{event.month}}--{{event.day}}</label></td>\n          </tr>\n          <!-- <a>{{warning1}}</a> -->\n          <tr>\n            <td> <label>Start time:</label></td>\n            <td><input type=\"time\" value={{event.start_time}} required [(ngModel)]=start_time name=start_time></td>\n          </tr>\n          <tr>\n            <td> <label>Ending time:</label></td>\n            <td><input type=\"time\" value={{event.ending_time}} required [(ngModel)]=ending_time name=ending_time></td>\n          </tr>\n          <tr>\n            <td><label>Location:</label></td>\n            <td><input type=\"text\" value={{event.location}} required [(ngModel)]=location name=location></td>\n          </tr>\n          <tr>\n            <td><label>Group name:</label></td>\n            <td><input type=\"text\" value={{event.group_name}} [(ngModel)]=group_name name=group_name></td>\n          </tr>\n          <tr>\n            <td><label>Group size:</label></td>\n            <td><input type=\"number\" value={{event.group_size}} [(ngModel)]=group_size name=group_size></td>\n          </tr>\n          <tr>\n            <td><label>describtion:</label></td>\n            <td>\n              <textarea rows=\"8\" cols=\"30\" value={{event.describtion}} name=describtion [(ngModel)]=describtion name=describtion></textarea>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <div style=\"text-align:center\">\n        <a>{{warning}}</a>\n        <div>\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<router-outlet></router-outlet>"

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
        this.user = {
            user_id: null,
            student_id: null,
            name: null,
            password: null,
            email: null
        };
    }
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
        this.calendarService.updateEvent(this.event, this.user.user_id)
            .subscribe(function (result) {
            if (result.affectedRows != 0) {
                _this.router.navigate(["/calendar-view"], { queryParams: { name: _this.id, key: _this.key } });
            }
        }, function (err) { return _this.warning = err.error; });
    };
    ModifyEventComponent.prototype.cancelClick = function () {
        this.router.navigate(["/calendar-view"], { queryParams: { name: this.id, key: this.key } });
    };
    ModifyEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.queryParams
            .subscribe(function (params) {
            _this.event.event_id = params['event_id'];
            _this.key = params['key'];
            _this.name = params['name'];
        });
        this.calendarService.getEventByID(this.event.event_id, this.user.user_id)
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

module.exports = "<div>\n  <h3 style=\"text-align:center\">Register user</h3>\n  <br>\n  <div>\n    <form (ngSubmit)=\"onSubmit(registerUserForm.value)\" #registerUserForm=\"ngForm\">\n      <div>\n        <label for=\"student_id\">Student ID</label>\n        <input type=\"text\" value=\"student_id\" name=\"student_id\" [(ngModel)]=student_id required>\n      </div>\n      <div>\n        <label for=\"name\">Name</label>\n        <input type=\"text\" value=\"name\" name=\"name\"  [(ngModel)]=name required>\n      </div>\n      <div>\n        <label for=\"password\">Password</label>\n        <input type=\"password\" value=\"password1\" name=\"password1\" [(ngModel)]=password1 required>\n      </div>\n      <div>\n        <label for=\"password\">Password Validation</label>\n        <input type=\"password\" value=\"password2\" name=\"password2\" [(ngModel)]=password2 required>\n      </div>\n      <div>\n        <label for=\"email\">Email</label>\n        <input type=\"text\" value=\"email\" name=\"email\" [(ngModel)]=email required>\n      </div>\n      <div style=\"text-align:center\">\n        <a>{{warning}}</a>\n      </div>\n      <div>\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\n          <button class=\"btn btn-primary\" type=\"submit\">Register</button>\n      </div>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n"

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
        if (value.student_id != null) {
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
            this.calendarService.addUser(this.user)
                .subscribe(function (user) {
                console.log(user);
                if (user.affectedRows !== 0) {
                    _this.router.navigate(['/login']);
                }
            }, function (err) { return _this.warning = err.error; });
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

module.exports = "<div>\n  <h3 style=\"text-align:center\">Change Password</h3>\n  <br>\n  <div>\n    <form (ngSubmit)=\"onSubmit(profileForm.value)\" #profileForm=\"ngForm\">\n      <table align='center'>\n        <tbody>\n          <tr>\n            <td> <label>Current:</label></td>\n            <td> <input type=\"text\" required [(ngModel)]=oldPassword name=oldPassword></td>\n          </tr>\n          <tr>\n            <td> <label>New:</label></td>\n            <td><input type=\"text\" required [(ngModel)]=newPassword1 name=newPassword1></td>\n          </tr>\n          <tr>\n            <td><label>Retype new:</label></td>\n            <td><input type=\"text\" required [(ngModel)]=newPassword2 name=newPassword2></td>\n          </tr>\n        </tbody>\n      </table>\n      <hr>\n      <div style=\"text-align:center\">\n        <a>{{warning}}</a>\n        <div>\n          <button class=\"btn btn-primary\" (click)=\"cancelClick()\">Cancel</button>\n          <button class=\"btn btn-primary\" type=\"submit\">Confirm</button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n<router-outlet></router-outlet>"

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
    production: false,
    apiUrl: "http://localhost:3000/"
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

module.exports = __webpack_require__(/*! /Users/anneigeltjoern/Documents/easyplanner/easy-planner/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map