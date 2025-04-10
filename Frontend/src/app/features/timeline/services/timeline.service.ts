import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { TimelineResponse } from '../model/timeline.model';
import { environment } from '@environments/environment';

const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private http = inject(HttpClient);

  getTimeline(page = 1) {
    const params = new HttpParams().set('page', page.toString());

    return this.http.get<TimelineResponse>(API_URL + '/transactions', {
      params,
    });
  }
}
