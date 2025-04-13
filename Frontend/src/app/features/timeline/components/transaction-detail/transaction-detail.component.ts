import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { DescriptionListComponent } from '@core/components/atoms/description-list/description-list.component';
import { TransactionDateComponent } from '@core/components/atoms/transaction-date/transaction-date.component';
import { TransactionDetailNotFoundComponent } from '@core/components/molecules/transaction-detail-not-found/transaction-detail-not-found.component';
import { TimelineStore } from '@features/timeline/store/timeline.store';

@Component({
  selector: 'app-transaction-detail',
  imports: [
    CardComponent,
    DescriptionListComponent,
    TransactionDateComponent,
    TransactionDetailNotFoundComponent,
  ],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss',
})
export class TransactionDetailComponent implements OnInit {
  readonly timelineStore = inject(TimelineStore);
  readonly route = inject(ActivatedRoute);

  // transactionDetail = this.timelineStore.getCurrentTransactionDetail();

  ngOnInit() {
    const transactionDetailId = this.route.snapshot.paramMap.get('id');
    this.timelineStore.setViewedTransactionDetailId(transactionDetailId);
  }
}
