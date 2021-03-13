import { Component } from '@angular/core';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
})
export class PropertyOverviewComponent {
  navbarItems = ['Fotos', 'Menu'];
  navbarSelectedItem = 0;

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  itemChange(index: number): void {
    this.navbarSelectedItem = index;
  }
}
