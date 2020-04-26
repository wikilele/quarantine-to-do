import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToDoComponent } from './to-do.component';
import { Observable, of } from 'rxjs';
import { ActivitiesService, JsonActivity } from '../activities.service';


class MockActivitiesService {
  getOne(): Observable<JsonActivity> {
    return of({ activity: 'beautiful activity' });
  }
}


describe('ToDoComponent', () => {
  let component: ToDoComponent;
  let fixture: ComponentFixture<ToDoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToDoComponent],
      providers: [{ provide: ActivitiesService, useValue: new MockActivitiesService() }],
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
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('.message-text').textContent).toContain('!push the button to get something to do!');
  });

  it('should render the activity', () => {
    component.getActivity();
    expect(component.message).toBe('beautiful activity');

  });

});

