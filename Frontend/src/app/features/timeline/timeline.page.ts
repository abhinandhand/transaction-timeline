import { JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStore } from '@store/app.store';

@Component({
  selector: 'app-timeline',
  imports: [RouterOutlet, JsonPipe],
  templateUrl: './timeline.page.html',
  styleUrl: './timeline.page.scss',
})
export class TimelineComponent implements OnInit {
  readonly appStore = inject(AppStore);

  ngOnInit() {
    this.appStore.loadTimeline();

    console.log('Timeline loaded:', this.appStore.timeline());
  }
}
