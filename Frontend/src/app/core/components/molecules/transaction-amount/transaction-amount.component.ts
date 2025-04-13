import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MoneyComponent } from '@core/components/atoms/money/money.component';

@Component({
  selector: 'app-transaction-amount',
  imports: [MoneyComponent, CommonModule],
  providers: [CurrencyPipe],
  templateUrl: './transaction-amount.component.html',
  styleUrl: './transaction-amount.component.scss',
})
export class TransactionAmountComponent {
  amount = input.required<number>();
  isCredit = input.required<boolean>();
  showCurrency = input<boolean>(false);
  customClass = input<string>('');

  currencyPipe = inject(CurrencyPipe);

  get transactionAmountAriaLabel(): string {
    const amountFormatted =
      this.currencyPipe.transform(this.amount(), 'EUR', 'symbol', '1.2-2') ??
      'unknown amount';
    return this.isCredit()
      ? `Credit of ${amountFormatted}`
      : `Debit of ${amountFormatted}`;
  }
}
