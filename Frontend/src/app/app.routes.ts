import { Routes } from '@angular/router';
import { PageNotFoundComponent } from '@core/components/molecules/page-not-found/page-not-found.component';
import { TimelineRoute } from '@features/timeline/model/timeline.model';
import { timelineRoutes } from '@features/timeline/timeline.routes';

export const routes: Routes = [
  { path: '', redirectTo: TimelineRoute.Timeline, pathMatch: 'full' },
  ...timelineRoutes,
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
