import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '@core/components/atoms/loader/loader.component';
import { HttpErrorComponent } from '../../core/components/molecules/http-error/http-error.component';
import { TimelineStore } from './store/timeline.store';

@Component({
  selector: 'app-timeline-page',
  imports: [RouterOutlet, LoaderComponent, HttpErrorComponent],
  templateUrl: './timeline.page.html',
  styleUrl: './timeline.page.scss',
  providers: [TimelineStore],
})
export class TimelinePageComponent {
  readonly timelineStore = inject(TimelineStore);
}
