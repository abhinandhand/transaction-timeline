import { Component, input } from '@angular/core';
import { TimelineEntry } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-transaction-day-list',
  imports: [],
  templateUrl: './transaction-day-list.component.html',
  styleUrl: './transaction-day-list.component.scss',
})
export class TransactionDayListComponent {
  transactionDay = input.required<TimelineEntry>();
}
