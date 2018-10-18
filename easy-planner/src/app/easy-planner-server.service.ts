import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Event } from './model/event';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class EasyPlannerServerService {
    events: Event[];
    url: string = "http://localhost:3000/";

    constructor(private http: HttpClient) { }

    /**
     * this method is used to get users' information from database
     * @param userName the user account
     * @param password the user password
     */
    getUser(userName: string, password: string): Observable<User> {
        // FIXME: ensure that this is always used by login
        return this.http.get<User>(this.url + 'login/' + userName + '/' + password);
    }
    /**
     *  this method is used to get users' information from database by user id
     * @param user_id  users id in user table
     */
    getUserByID(user_id: string): Observable<User> {
        return this.http.get<User>(this.url + 'login/' + user_id);
    }
    /**
     *  this method is used to add user into the user table in database
     * @param user user object
     */
    addUser(user: User): Observable<any> {
        return this.http.post<any>(this.url + 'login/', user, httpOptions);
    }
    /**
     * this method is used to update the user informtion in database
     * @param user user object
     */
    updateUser(user: User): Observable<any> {
        return this.http.put<any>(this.url + 'login/' + user.user_id, user, httpOptions);
    }

    /**
     * those methods are used to access the event table
     * @param user_id this is a forienkey in event table
     */
    getEvents(user_id: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/' + user_id)
    }
    /**
     *  this method is used to get events' information from database by event id
     * @param event_id this is a event id in event table
     */
    getEventByID(event_id: string): Observable<Event> {
        return this.http.get<Event>(this.url + 'calender-view/modify-event/' + event_id)
    }
    /**
     * this method is used to get the events'information from database by event date
     * @param user_id this is a users' id in user table and event table
     * @param year  this is envent year
     * @param month this is event month
     * @param day this is event date
     */
    getEventsByDate(user_id: string, year: string, month: string, day: string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/' + user_id + '/' + year + '/' + month + '/' + day)
    }
    /**
     * this method is used to add an event into the database event table
     * @param event this is an event object
     */
    addEvent(event: Event): Observable<any> {
        return this.http.post<any>(this.url + 'calender-view/', event, httpOptions)
    }
    /**
     * this method is used to update an event in the event table
     * @param event this is an event object
     */
    updateEvent(event: Event): Observable<any> {
        return this.http.put<any>(this.url + 'calender-view/', event, httpOptions)
    }
    /**
     * this method is used to delete an event in the event table
     * @param event_id event id in event table
     */
    deleteEvent(event_id: string): Observable<any> {
        return this.http.delete<any>(this.url + 'calender-view/' + event_id)
    }
} 
