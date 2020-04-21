import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css', '../app.component.css']
})
export class ToDoComponent implements OnInit {

  message: string;
  url: string = environment.apiUrl + 'api/activity';

  constructor(
    private http: HttpClient
  ) {
    this.message = '!push the button to get something to do!';
   }

  ngOnInit() {
  }

  getActivity() {
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get<JsonActivity>(this.url, {headers : httpHeaders})
             .subscribe(q => this.message = q.activity );
  }
}


interface JsonActivity  {
  activity: string;
}
