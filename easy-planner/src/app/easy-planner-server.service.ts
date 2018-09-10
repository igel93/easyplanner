import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user'
import { Event } from './model/event'
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

    getUser(userName:string,password:string): Observable<User> {
        return this.http.get<User>(this.url + 'login/' + userName + '/' + password)
    }
    addUser(user: User): Observable<User> {
        return this.http.post<User>(this.url + 'login/',{user} , httpOptions)
    }
    updateUser(user: User): Observable<User> {
        return this.http.put<User>(this.url +'login/' + user.student_id, {user}, httpOptions)
    }

    /**
     * those methods are used to access the event table
     * @param user_id this is a forienkey in event table
     */
    getEvents(user_id:string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/' + user_id)
    }
    getEventsByDate(user_id:string,year:string,month:string,day:string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/'+user_id+'/'+year+'/'+month+'/'+day)
    }
    addEvent(event: Event): Observable<Event> {
        return this.http.post<Event>(this.url + 'calender-view/', {event}, httpOptions)
    }
    updateEvent(event: Event): Observable<Event> {
        return this.http.put<Event>(this.url + 'calender-view/', {event}, httpOptions)
    }
    deleteEvent(event_id: string): Observable<Event> {
        return this.http.delete<Event>(this.url + 'calender-view/' +event_id)
    }
}
