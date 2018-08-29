import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PostsService {

  constructor(private http: Http) { }

  // Get all posts from the API
  getPosts() {
    return this.http.get('http://jsonplaceholder.typicode.com/posts')
      .pipe(map(res => res.json()));
  }

}
