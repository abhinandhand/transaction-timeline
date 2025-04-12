import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimelineStore } from '@features/timeline/store/timeline.store';

@Component({
  selector: 'app-transaction-detail',
  imports: [],
  templateUrl: './transaction-detail.component.html',
  styleUrl: './transaction-detail.component.scss',
})
export class TransactionDetailComponent implements OnInit {
  readonly timelineStore = inject(TimelineStore);
  readonly route = inject(ActivatedRoute);

  ngOnInit() {
    const transactionId = this.route.snapshot.paramMap.get('id');
    this.timelineStore.setViewedTransactionId(transactionId);
  }
}
