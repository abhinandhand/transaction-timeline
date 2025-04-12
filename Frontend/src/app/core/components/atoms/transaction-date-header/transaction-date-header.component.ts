import { Component, input } from '@angular/core';
import { TransactionDatePipe } from '@core/pipes/transaction-date/transaction-date.pipe';

@Component({
  selector: 'app-transaction-date-header',
  imports: [TransactionDatePipe],
  templateUrl: './transaction-date-header.component.html',
  styleUrl: './transaction-date-header.component.scss',
})
export class TransactionDateHeaderComponent {
  dateInfo = input.required<string>();
}
