import { Component, inject } from '@angular/core';
import { AccountHolderInfoComponent } from '@core/components/molecules/account-holder-info/account-holder-info.component';
import { TransactionFilterComponent } from '@core/components/molecules/transaction-filter/transaction-filter.component';
import { InfiniteScrollDirective } from '@core/directives/infinite-scroll/infinite-scroll.directive';
import { TransactionListComponent } from '@features/timeline/components/transactions-overview/transaction-list-card/transaction-list-card.component';
import { TimelineStore } from '@features/timeline/store/timeline.store';

@Component({
  selector: 'app-transactions',
  imports: [
    InfiniteScrollDirective,
    AccountHolderInfoComponent,
    TransactionFilterComponent,
    TransactionListComponent,
  ],
  templateUrl: './transactions-overview.component.html',
  styleUrl: './transactions-overview.component.scss',
})
export class TransactionsOverviewComponent {
  readonly timelineStore = inject(TimelineStore);
}
