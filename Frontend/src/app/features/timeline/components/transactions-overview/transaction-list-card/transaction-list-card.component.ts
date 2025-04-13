import { Component, input } from '@angular/core';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { TransactionDateComponent } from '@core/components/atoms/transaction-date/transaction-date.component';
import { TransactionItemComponent } from '@core/components/molecules/transaction-item/transaction-item.component';
import { TimelineEntry } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-transaction-list',
  imports: [CardComponent, TransactionDateComponent, TransactionItemComponent],
  templateUrl: './transaction-list-card.component.html',
  styleUrl: './transaction-list-card.component.scss',
})
export class TransactionListComponent {
  transactionDay = input.required<TimelineEntry>();
}
