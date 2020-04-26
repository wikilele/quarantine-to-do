import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  url: string = environment.apiUrl + 'api/activity';

  constructor(
    private http: HttpClient
  ) { }

  getOne() : Observable<JsonActivity> { 
    const httpHeaders: HttpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get<JsonActivity>(this.url, {headers : httpHeaders});
  }
}


export interface JsonActivity  {
  activity: string;
}
