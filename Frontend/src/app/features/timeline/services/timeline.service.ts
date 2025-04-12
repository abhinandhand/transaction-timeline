import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment';
import { map } from 'rxjs';
import { TimelineMapper } from '../mapper/timeline.service.mapper';
import { TimelineResponse } from '../model/timeline.model';

const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private http = inject(HttpClient);
  private timelineMapper = new TimelineMapper();

  getTimeline(page = 1) {
    const params = new HttpParams().set('page', page.toString());

    return this.http
      .get<TimelineResponse>(API_URL + '/transactions', { params })
      .pipe(map((response) => this.timelineMapper.mapTimelineData(response)));
  }
}
