import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  activity:string;
  url:string = 'http://localhost:4242/api/activity'

  constructor(
    private http: HttpClient
  ) {
    this.activity = "Push ROLL to get something to do!"
   }

  ngOnInit() {
  }

  getActivity(){
    var httpHeaders : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get<JsonActivity>(this.url, {headers : httpHeaders})
             .subscribe(q => this.activity = q.activity);
  }
}

interface JsonActivity  {
  activity : string;
}
