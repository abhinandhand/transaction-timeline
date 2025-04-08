import { Routes } from '@angular/router';
import { timelineRoutes } from '@features/timeline/timeline.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'timeline', pathMatch: 'full' },
  ...timelineRoutes,
  { path: '**', redirectTo: 'timeline', pathMatch: 'full' },
];
