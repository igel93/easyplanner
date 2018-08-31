import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterStateSnapshot, RouterLink } from '@angular/router';
import { GROUPEVENTS } from 'src/mock-group-events';
@Component({
  selector: 'app-event-detial',
  templateUrl: './event-detial.component.html',
  styleUrls: ['./event-detial.component.css']
})
export class EventDetialComponent implements OnInit {
  events = GROUPEVENTS;
  id: String;
  name: String;
  link: String;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
  }
  ngOnInit() {
    //this method will get the papameter from last component
    this.name = this.activatedRoute.snapshot.paramMap.get('id');
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.link = "/create-group-event/" + this.id;
  }
  logOut() {
    this.router.navigate(['/login']);
  }
}
