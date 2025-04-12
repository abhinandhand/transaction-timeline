import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { NameBadgeComponent } from '@core/components/atoms/name-badge/name-badge.component';
import { Transaction } from '@features/timeline/model/timeline.model';
import { TransactionAmountComponent } from '../transaction-amount/transaction-amount.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-item',
  imports: [
    NameBadgeComponent,
    CommonModule,
    TransactionAmountComponent,
    RouterLink,
  ],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
  data = input.required<Transaction>();
  isLast = input<boolean>(false);
}
