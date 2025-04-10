import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '@core/components/atoms/loader/loader.component';
import { AppStore } from '@store/app.store';
import { HttpErrorComponent } from '../../core/components/molecules/http-error/http-error.component';

@Component({
  selector: 'app-timeline-page',
  imports: [RouterOutlet, LoaderComponent, HttpErrorComponent],
  templateUrl: './timeline.page.html',
  styleUrl: './timeline.page.scss',
})
export class TimelinePageComponent {
  readonly appStore = inject(AppStore);
}
