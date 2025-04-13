import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { AppStore } from '@store/app.store';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  customClass = input<string>();

  // to do: implement a better way to apply theme than using store
  readonly appStore = inject(AppStore);
}
