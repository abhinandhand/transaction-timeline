import { Component } from '@angular/core';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { InputSearchComponent } from '@core/components/atoms/input-search/input-search.component';

@Component({
  selector: 'app-transaction-filter',
  imports: [CardComponent, InputSearchComponent],
  templateUrl: './transaction-filter.component.html',
  styleUrl: './transaction-filter.component.scss',
})
export class TransactionFilterComponent {}
