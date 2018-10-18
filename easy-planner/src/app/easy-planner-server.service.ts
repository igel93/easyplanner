import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './model/user';
import { Event } from './model/event';
import { environment } from '../environments/environment';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class EasyPlannerServerService {
    events: Event[];
    url: string = environment.apiUrl;
    constructor(private http: HttpClient) { }

    verifyLogin(userName:string,password:string): Observable<User> {
        // FIXME: ensure that this is always used by login
        return this.http.post<User>(this.url + 'login/verify', {userName, password});
    }

    getUserByID(user_id:string): Observable<User> {
        return this.http.get<User>(this.url + 'login/' + user_id);
    }
    addUser(user: User): Observable<any> {
        return this.http.post<any>(this.url + 'login/', user, httpOptions);
    }

    updateUser(user: User, oldpassword: string, newpassword: string): Observable<any> {
        return this.http.put<any>(this.url + 'login/' + user.user_id, {user: user, oldpassword: oldpassword, newpassword: newpassword}, httpOptions);
    }

    /**
     * those methods are used to access the event table
     * @param user_id this is a forienkey in event table
     */
    getEvents(user_id:string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/' + user_id)
    }
    getEventByID(event_id:string, user_id: string): Observable<Event> {
        return this.http.get<Event>(this.url + 'calender-view/modify-event/' + event_id)
    }
    getEventsByDate(user_id:string,year:string,month:string,day:string): Observable<Event[]> {
        return this.http.get<Event[]>(this.url + 'calender-view/'+user_id+'/'+year+'/'+month+'/'+day)
    } 
    addEvent(event: Event): Observable<any> {
        return this.http.post<any>(this.url + 'calender-view/', event, httpOptions)
    } 
    updateEvent(event: Event, user_id: string): Observable<any> {
        return this.http.put<any>(this.url + 'calender-view/', event, httpOptions)
    }
    deleteEvent(event_id: string): Observable<any> {
        return this.http.delete<any>(this.url + 'calender-view/' +event_id)
    }
} 
