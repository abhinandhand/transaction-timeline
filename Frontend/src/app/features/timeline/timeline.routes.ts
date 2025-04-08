import { Routes } from '@angular/router';
import { authGuard } from '@core/guards/app.guards';

export const timelineRoutes: Routes = [
  {
    path: 'timeline',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./timeline.component').then((c) => c.TimelineComponent),
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./components/transactions/transactions.component').then(
            (c) => c.TransactionsComponent,
          ),
      },
      {
        path: 'detail/:id',
        loadChildren: () =>
          import(
            '../timeline/components/transaction-detail/transaction-detail.component'
          ).then((c) => c.TransactionDetailComponent),
      },
    ],
  },
];
