import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/app.guards';
import { TimelineRoute } from './model/timeline.model';

export const timelineRoutes: Routes = [
  {
    path: TimelineRoute.Timeline,
    title: 'Transaction timeline',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./timeline.page').then((c) => c.TimelinePageComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import(
            './components/transactions-overview/transactions-overview.component'
          ).then((c) => c.TransactionsOverviewComponent),
      },
      {
        path: `${TimelineRoute.Detail}/:id`,
        title: 'Transaction detail',
        loadComponent: () =>
          import(
            '../timeline/components/transaction-detail/transaction-detail.component'
          ).then((c) => c.TransactionDetailComponent),
      },
    ],
  },
];
