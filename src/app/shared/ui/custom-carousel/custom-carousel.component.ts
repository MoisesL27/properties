import { Component, Input, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-custom-carousel',
  templateUrl: './custom-carousel.component.html',
  providers: [NgbCarouselConfig],
  styleUrls: ['./custom-carousel.component.scss'],
})
export class CustomCarouselComponent implements OnInit {
  @Input() imagesUrl: string[] = [];

  slideNumber = 0;

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  ngOnInit(): void {
    this.slideNumber = this.imagesUrl.length;
  }

  slideChange(slideIndex: any): void {
    console.log(slideIndex);
  }
}
