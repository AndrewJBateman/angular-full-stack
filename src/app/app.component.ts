import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  users: Observable<User[]>;

  constructor(private http: HttpClient) {
    this.users = this.http.get<User[]>(
      'http://localhost:4201/users'
    );
    console.log(
      'messages: ',
      this.users.subscribe((x: any) => console.log(x))
    );
  }

  post() {
    this.http
      .post<User>('http://localhost:4201/users', {
        name: 'Andrew',
        age: 30,
        rights: ['admin', 'writer'],
      })
      .subscribe((next) => console.log('new user:', next));
  }
}
