import { HttpErrorResponse } from '@angular/common/http';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-http-error',
  templateUrl: './http-error.component.html',
  styleUrls: ['./http-error.component.scss'],
})
export class HttpErrorComponent {
  retryCount = 0;
  error = input.required<HttpErrorResponse | null>();
  retryClicked = output<void>();

  onRetryClicked() {
    if (this.retryCount <= 3) {
      this.retryCount++;
      this.retryClicked.emit();
    }
  }
}
