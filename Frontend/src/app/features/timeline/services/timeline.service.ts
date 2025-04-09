import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Timeline } from '../store/timeline.model';
import { environment } from '@environments/environment';

const { API_URL } = environment;

@Injectable({
  providedIn: 'root',
})
export class TimelineService {
  private http = inject(HttpClient);

  getTimeline() {
    return this.http.get<Timeline>(API_URL + '/transactions');
  }
}
