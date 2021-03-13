import { map } from 'rxjs/operators';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig, NgbSlideEvent } from '@ng-bootstrap/ng-bootstrap';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  providers: [NgbCarouselConfig],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomCarouselComponent implements OnInit {
  private currentIndex: BehaviorSubject<number>;

  @Input() imagesUrl$: Observable<string[]> = of([]);
  @Input() tags$: Observable<string[]> = of([]);

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

    this.slidesNumber$ = this.imagesUrl$.pipe(map((images) => images.length));
  }

  /**
   * When an slide event happend compute the current index based in the event information
   * @param slideEvent
   */
  slideChange(slideEvent: NgbSlideEvent): void {
    const lastHyphenIndex = slideEvent.current.lastIndexOf('-');
    const currentIndex = Number(slideEvent.current.slice(lastHyphenIndex + 1));

    this.currentIndex.next(currentIndex + 1);
  }
}
