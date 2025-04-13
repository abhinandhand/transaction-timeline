import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { input } from '@angular/core';
import { DateRange } from '@core/models/app.model';

@Component({
  selector: 'app-date-range-picker',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './date-range-picker.component.html',
  styleUrls: ['./date-range-picker.component.scss'],
})
export class DateRangePickerComponent {
  dateRangeEvent = output<DateRange>();

  startDate = input<string | null>(null);
  endDate = input<string | null>(null);

  tempStartDate = signal<string | null>(null);
  tempEndDate = signal<string | null>(null);

  dateRange = signal<DateRange>({
    startDate: null,
    endDate: null,
  });

  constructor() {
    this.tempStartDate.set(this.startDate());
    this.tempEndDate.set(this.endDate());
  }

  updateDateRange() {
    this.dateRange.set({
      startDate: this.tempStartDate(),
      endDate: this.tempEndDate(),
    });
    this.dateRangeEvent.emit(this.dateRange());
  }
}
