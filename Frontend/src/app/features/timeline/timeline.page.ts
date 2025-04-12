import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '@core/components/atoms/loader/loader.component';
import { HttpErrorComponent } from '../../core/components/molecules/http-error/http-error.component';
import { TimelineStore } from './store/timeline.store';
import { BreadcrumbsComponent } from '@core/components/atoms/breadcrumbs/breadcrumbs.component';

@Component({
  selector: 'app-timeline-page',
  imports: [
    RouterOutlet,
    LoaderComponent,
    HttpErrorComponent,
    BreadcrumbsComponent,
  ],
  templateUrl: './timeline.page.html',
  styleUrl: './timeline.page.scss',
  providers: [TimelineStore],
})
export class TimelinePageComponent {
  readonly timelineStore = inject(TimelineStore);
}
