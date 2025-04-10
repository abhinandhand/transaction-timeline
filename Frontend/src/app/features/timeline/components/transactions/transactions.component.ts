import { Component, inject } from '@angular/core';
import { TransactionDayListComponent } from '@core/components/molecules/transaction-day-list/transaction-day-list.component';
import { InfiniteScrollDirective } from '@core/directives/infinite-scroll/infinite-scroll.directive';
import { TimelineStore } from '@features/timeline/store/timeline.store';

@Component({
  selector: 'app-transactions',
  imports: [TransactionDayListComponent, InfiniteScrollDirective],

  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent {
  readonly timelineStore = inject(TimelineStore);
}
