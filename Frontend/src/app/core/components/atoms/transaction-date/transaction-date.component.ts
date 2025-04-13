import { Component, inject, input } from '@angular/core';
import { TransactionDatePipe } from '@core/pipes/transaction-date/transaction-date.pipe';

@Component({
  selector: 'app-transaction-date',
  imports: [TransactionDatePipe],
  providers: [TransactionDatePipe],
  templateUrl: './transaction-date.component.html',
  styleUrl: './transaction-date.component.scss',
})
export class TransactionDateComponent {
  dateInfo = input.required<string>();

  transactionDatePipe = inject(TransactionDatePipe);

  get transactionDateAriaLabel() {
    const formattedDate = this.transactionDatePipe.transform(this.dateInfo());
    return `Transaction date: ${formattedDate}`;
  }
}
