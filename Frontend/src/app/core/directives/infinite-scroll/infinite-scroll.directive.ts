import {
  Directive,
  ElementRef,
  input,
  OnDestroy,
  OnInit,
  output,
} from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[appInfiniteScroll]',
  exportAs: 'infiniteScroll',
})
export class InfiniteScrollDirective implements OnInit, OnDestroy {
  nearEnd = output<void>();
  threshold = input<number>(600);

  private window!: Window;
  private destroy$ = new Subject<void>();
  private debounceTimeMs = 300;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    this.window = window;

    fromEvent(this.window, 'scroll')
      .pipe(debounceTime(this.debounceTimeMs), takeUntil(this.destroy$))
      .subscribe(() => {
        const heightOfWholePage =
          this.window.document.documentElement.scrollHeight;
        const heightOfElement = this.el.nativeElement.scrollHeight;
        const currentScrolledY = this.window.scrollY;
        const innerHeight = this.window.innerHeight;
        const spaceOfElementAndPage = heightOfWholePage - heightOfElement;
        const scrollToBottom =
          heightOfElement -
          innerHeight -
          currentScrolledY +
          spaceOfElementAndPage;

        if (scrollToBottom < this.threshold()) {
          this.nearEnd.emit();
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
