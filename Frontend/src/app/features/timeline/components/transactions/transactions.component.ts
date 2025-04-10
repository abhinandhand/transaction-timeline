import { Component, inject, OnInit } from '@angular/core';
import { TransactionDayListComponent } from '@core/components/molecules/transaction-day-list/transaction-day-list.component';
import { InfiniteScrollDirective } from '@core/directives/infinite-scroll/infinite-scroll.directive';
import { AppStore } from '@store/app.store';

@Component({
  selector: 'app-transactions',
  imports: [TransactionDayListComponent, InfiniteScrollDirective],
  templateUrl: './transactions.component.html',
  styleUrl: './transactions.component.scss',
})
export class TransactionsComponent implements OnInit {
  readonly appStore = inject(AppStore);

  ngOnInit() {
    console.log(this.appStore.timeline());
  }
}
