import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { NameBadgeComponent } from '@core/components/atoms/name-badge/name-badge.component';
import { Transaction } from '@features/timeline/model/timeline.model';
import { TransactionAmountComponent } from '../transaction-amount/transaction-amount.component';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-transaction-item',
  imports: [
    NameBadgeComponent,
    CommonModule,
    TransactionAmountComponent,
    RouterLink,
  ],
  providers: [CurrencyPipe],
  templateUrl: './transaction-item.component.html',
  styleUrl: './transaction-item.component.scss',
})
export class TransactionItemComponent {
  data = input.required<Transaction>();
  isLast = input<boolean>(false);
  currencyPipe = inject(CurrencyPipe);

  constructor(private router: Router) {}

  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this.router.navigate([
        '/timeline/detail',
        this.data().transactionDetailId,
      ]);
    }
  }

  get transactionItemAiraLabel(): string {
    const amount =
      this.currencyPipe.transform(
        this.data().amountInBaseCurrency,
        'EUR',
        'symbol',
        '1.2-2',
      ) ?? 'unknown amount';
    const name = this.data().otherParty?.name;
    return name
      ? `Transaction with ${name}, amount ${amount}`
      : `Transaction, amount ${amount}`;
  }
}
