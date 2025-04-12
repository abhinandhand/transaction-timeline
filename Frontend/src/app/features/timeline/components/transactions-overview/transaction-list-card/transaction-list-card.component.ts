import { Component, input } from '@angular/core';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { TransactionDateHeaderComponent } from '@core/components/atoms/transaction-date-header/transaction-date-header.component';
import { TransactionItemComponent } from '@core/components/molecules/transaction-item/transaction-item.component';
import { TimelineEntry } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-transaction-list',
  imports: [
    CardComponent,
    TransactionDateHeaderComponent,
    TransactionItemComponent,
  ],
  templateUrl: './transaction-list-card.component.html',
  styleUrl: './transaction-list-card.component.scss',
})
export class TransactionListComponent {
  transactionDay = input.required<TimelineEntry>();
}
