import { Component, input } from '@angular/core';
import { MoneyComponent } from '@core/components/atoms/money/money.component';
import { Account } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-account-holder-info',
  imports: [MoneyComponent],
  templateUrl: './account-holder-info.component.html',
  styleUrl: './account-holder-info.component.scss',
})
export class AccountHolderInfoComponent {
  account = input.required<Account>();
}
