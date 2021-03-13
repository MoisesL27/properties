import { map, tap, shareReplay } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgbCarousel, NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  providers: [NgbCarouselConfig],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCarouselComponent implements OnInit {
  private currentIndex: BehaviorSubject<number>;

  @Input() imagesUrl$: Observable<string[]>;
  @Input() tags$: Observable<string[]> = of([]);
  @ViewChild(NgbCarousel, { static: true }) carousel: NgbCarousel;

  slidesNumber$: Observable<number>;
  currentIndex$: Observable<number>;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.currentIndex = new BehaviorSubject(1);
    this.currentIndex$ = this.currentIndex.asObservable();

    this.slidesNumber$ = this.imagesUrl$.pipe(
      // Every time that images change the carousel is reseted to the first slide
      tap(() => this.carousel.select('slide-0')),
      map((images) => images.length),
      shareReplay()
    );
  }

  /**
   * When an slide event happend compute the current index based in the event information
   * @param slideEvent and event value emitted by the carousel
   */
  slideChange(slideEvent: NgbSlideEvent): void {
    const lastHyphenIndex = slideEvent.current.lastIndexOf('-');
    const currentIndex = Number(slideEvent.current.slice(lastHyphenIndex + 1));

    this.currentIndex.next(currentIndex + 1);
  }
}
