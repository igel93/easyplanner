import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Component({
  selector: 'app-inclass-assessment',
  templateUrl: './inclass-assessment.component.html',
  styleUrls: ['./inclass-assessment.component.css']
})
export class InclassAssessmentComponent implements OnInit {
  value = 0;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('/api/counter/id').subscribe(data => {
      console.log(data);
    });
  }

  increaseCounter() {
    this.value++;
  }

}
