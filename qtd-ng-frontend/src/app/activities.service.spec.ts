import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ActivitiesService, JsonActivity } from './activities.service';

describe('ActivitiesService', () => {
  let httpTestingController: HttpTestingController;
  let service: ActivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    service = TestBed.inject(ActivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('shoud get one atvity', () => {
    const mockData: JsonActivity = { activity: 'beautiful activity' };

    service.getOne().subscribe(data => expect(data).toEqual(mockData));

    // The following `expectOne()` will match the request's URL.
    // If no requests or multiple requests matched that URL
    // `expectOne()` would throw.
    const req = httpTestingController.expectOne(service.url);

    // Assert that the request is a GET.
    expect(req.request.method).toEqual('GET');

    // Respond with mock data, causing Observable to resolve.
    // Subscribe callback asserts that correct data was returned.
    req.flush(mockData);

    // Finally, assert that there are no outstanding requests.
    httpTestingController.verify();

  });

  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
});
