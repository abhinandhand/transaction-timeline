import { Component, output, signal } from '@angular/core';
import { CardComponent } from '@core/components/atoms/card/card.component';
import { DateRangePickerComponent } from '@core/components/atoms/date-range-picker/date-range-picker.component';
import { InputSearchComponent } from '@core/components/atoms/input-search/input-search.component';
import { DateRange } from '@core/models/app.model';
import { TimelineFilters } from '@features/timeline/model/timeline.model';

@Component({
  selector: 'app-transaction-filter',
  imports: [CardComponent, InputSearchComponent, DateRangePickerComponent],
  templateUrl: './transaction-filter.component.html',
  styleUrls: ['./transaction-filter.component.scss'],
})
export class TransactionFilterComponent {
  filterEvent = output<TimelineFilters>();

  private searchQuery = signal<string>('');
  private dateRange = signal<DateRange>({ startDate: null, endDate: null });

  onSearch(query: string): void {
    this.searchQuery.set(query);
    this.emitFilterState();
  }

  onDateRangeChange(range: DateRange): void {
    this.dateRange.set(range);
    this.emitFilterState();
  }

  private emitFilterState(): void {
    this.filterEvent.emit({
      searchQuery: this.searchQuery(),
      dateRange: this.dateRange(),
    });
  }
}
