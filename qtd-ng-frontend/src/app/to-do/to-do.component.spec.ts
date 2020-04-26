import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import { Observable, of } from 'rxjs';
import { JsonActivity } from '../activities.service';

describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MockActivitiesService],
      declarations: [ToDoComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToDoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the message', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.message-text').textContent).toContain('!push the button to get something to do!');
  });
});

class MockActivitiesService {
  getOne() : Observable<JsonActivity> {
    return of({activity : "beautiful activity"});
  }
}