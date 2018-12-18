import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  messages = this.http.get<any[]>('http://localhost:4201');

    constructor(private http: HttpClient) {}

    post() {
      this.http.post<any>('http://localhost:4201/users', {username: 'Andrew', password: 'Password'})
      .subscribe(next => console.log(next));
    }
}
