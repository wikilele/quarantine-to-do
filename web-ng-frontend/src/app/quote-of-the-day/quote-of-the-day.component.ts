import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-quote-of-the-day',
  templateUrl: './quote-of-the-day.component.html',
  styleUrls: ['./quote-of-the-day.component.css']
})
export class QuoteOfTheDayComponent implements OnInit {

  quote:string = 'no quote at the moment';
  url:string = 'http://localhost:4242/api/quote'

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
  }

  getHardCodedQuote(){
    this.quote = "hard coded quote!";
  }

  getQuote(){
    var httpHeaders : HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.get<JsonQuote>(this.url, {headers : httpHeaders})
             .subscribe(q => this.quote = q.quote);
  }
}

interface JsonQuote  {
  quote : string;
}