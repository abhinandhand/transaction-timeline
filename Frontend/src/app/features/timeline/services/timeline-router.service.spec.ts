import { TestBed } from '@angular/core/testing';

import { TimelineRouterService } from './timeline-router.service';

describe('TimelineRouterService', () => {
  let service: TimelineRouterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimelineRouterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
