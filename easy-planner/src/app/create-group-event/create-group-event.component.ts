import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, NavigationEnd, Router, RouterStateSnapshot, RouterLink, ActivatedRoute } from '@angular/router';
import { GroupEvent } from '../group-event';
import { GROUPEVENTS } from 'src/mock-group-events';

@Component({
  selector: 'app-create-group-event',
  templateUrl: './create-group-event.component.html',
  styleUrls: ['./create-group-event.component.css']
})
export class CreateGroupEventComponent implements OnInit {
  model = new GroupEvent(1, 'Group meeting 1', '3PM', '4PM', '1. sept, 2019', 'UTS Sydney', '504', '...');
  submitted = false;
  events = GROUPEVENTS;
  id: string;
  link: string;

  onSubmit() {
    this.submitted = true;
    this.link = '/calendar-view/' + this.id;
    this.router.navigate([this.link]);
  }

  newEvent() {
    this.model = new GroupEvent(2, '.', '.', '.', '.', '.', '.', '.');
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
  }



}
