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
  key: String;
  name: String;
  constructor(private activatedRoute: ActivatedRoute) {
  }
  ngOnInit() {
    //this method will get the papameter from last component
    this.name=this.activatedRoute.snapshot.queryParamMap.get('id');
  }
}
