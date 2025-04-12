import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  imports: [FormsModule],
  templateUrl: './input-search.component.html',
  styleUrl: './input-search.component.scss',
})
export class InputSearchComponent {
  searchEvent = output<string>();
  searchQuery = '';
  placeholder = input<string>('Search...');

  onSearch() {
    this.searchEvent.emit(this.searchQuery.trim());
  }
}
