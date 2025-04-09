import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoaderComponent } from '@components/atoms/loader/loader.component';
import { AppStore } from '@store/app.store';
import { HttpErrorComponent } from '../../components/molecules/http-error/http-error.component';

@Component({
  selector: 'app-timeline',
  imports: [RouterOutlet, LoaderComponent, HttpErrorComponent],
  templateUrl: './timeline.page.html',
  styleUrl: './timeline.page.scss',
})
export class TimelineComponent {
  readonly appStore = inject(AppStore);
}
