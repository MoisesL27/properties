import { Component } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  providers: [NgbCarouselConfig],
})
export class PropertyOverviewComponent {
  navbarItems = ['Fotos', 'Menu'];
  navbarSelectedItem = 0;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = false;
  }

  itemChange(index: number): void {
    this.navbarSelectedItem = index;
  }
}
