import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit {

  message:string;
  url:string = 'http://localhost:4242/api/activity'
  
  constructor(
    private http: HttpClient
  ) {
    this.message = "!push the button to get something to do!"
   }

  ngOnInit() {
  } 

  getActivity(){
    var httpHeaders : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get<JsonActivity>(this.url, {headers : httpHeaders})
             .subscribe(q => this.message = q.activity );
  }

  suggestActivity(){
    this.message = "write an email to user@mail.com to suggest an activity"
  }

  shareActivityOnFacebook(){
    this.message = "share on facebook"
  }

  shareActivityOnTwitter(){
    this.message = "share on twitter"
  }

}


interface JsonActivity  {
  activity : string;
}