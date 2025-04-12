import { formatDate } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transactionDate',
})
export class TransactionDatePipe implements PipeTransform {
  transform(value: string | Date): string {
    let date: Date;

    if (typeof value === 'string') {
      date = new Date(value);
    } else {
      date = value;
    }

    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    if (this.isSameDate(date, today)) {
      return 'Today';
    } else if (this.isSameDate(date, yesterday)) {
      return 'Yesterday';
    } else if (date.getFullYear() === today.getFullYear()) {
      return formatDate(date, 'MMMM d', 'en-US');
    } else {
      return formatDate(date, 'MMMM d, yyyy', 'en-US');
    }
  }

  private isSameDate(date1: Date, date2: Date): boolean {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  }
}
