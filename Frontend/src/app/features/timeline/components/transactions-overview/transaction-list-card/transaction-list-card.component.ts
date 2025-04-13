import { Component, inject, input } from '@angular/core';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { TransactionItemComponent } from '@core/components/molecules/transaction-item/transaction-item.component';
import { TransactionDatePipe } from '@core/pipes/transaction-date/transaction-date.pipe';
import { TimelineEntry } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-transaction-list',
  imports: [CardComponent, TransactionItemComponent, TransactionDatePipe],
  providers: [TransactionDatePipe],
  templateUrl: './transaction-list-card.component.html',
  styleUrl: './transaction-list-card.component.scss',
})
export class TransactionListComponent {
  transactionDay = input.required<TimelineEntry>();

  transactionDatePipe = inject(TransactionDatePipe);

  get transactionDateAriaLabel() {
    const formattedDate = this.transactionDatePipe.transform(
      this.transactionDay().transactionDate,
    );
    return `Transaction date: ${formattedDate}`;
  }
}
