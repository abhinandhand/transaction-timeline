import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-description-list',
  imports: [CommonModule],
  templateUrl: './description-list.component.html',
  styleUrl: './description-list.component.scss',
})
export class DescriptionListComponent {
  title = input.required<string>();
  value = input.required<string>();
  showCopy = input<boolean>(false);
  uppercaseKey = input<boolean>(false);

  copyToClipboard(value: string) {
    navigator.clipboard.writeText(value);
  }
}
