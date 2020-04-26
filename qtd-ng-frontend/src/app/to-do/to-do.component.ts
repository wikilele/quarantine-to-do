import { Component, OnInit } from '@angular/core';
import { ActivitiesService, JsonActivity } from '../activities.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css', '../app.component.css']
})
export class ToDoComponent implements OnInit {

  message: string;


  constructor(
    private activitiesService: ActivitiesService
  ) {
    this.message = '!push the button to get something to do!';
   }

  ngOnInit() {
  }

  getActivity() {
    this.activitiesService.getOne()
             .subscribe(q => this.message = q.activity );
  }
}

