import { Routes } from '@angular/router';
import { TimelineRoute } from '@features/timeline/model/timeline.model';
import { timelineRoutes } from '@features/timeline/timeline.routes';

export const routes: Routes = [
  { path: '', redirectTo: TimelineRoute.Timeline, pathMatch: 'full' },
  ...timelineRoutes,
  { path: '**', redirectTo: TimelineRoute.Timeline, pathMatch: 'full' },
];
