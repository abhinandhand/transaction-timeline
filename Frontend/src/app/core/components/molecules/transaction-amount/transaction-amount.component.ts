import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MoneyComponent } from '@core/components/atoms/money/money.component';

@Component({
  selector: 'app-transaction-amount',
  imports: [MoneyComponent, CommonModule],
  templateUrl: './transaction-amount.component.html',
  styleUrl: './transaction-amount.component.scss',
})
export class TransactionAmountComponent {
  amount = input.required<number>();
  isCredit = input.required<boolean>();
  showCurrency = input<boolean>(false);
  customClass = input<string>('');
}
