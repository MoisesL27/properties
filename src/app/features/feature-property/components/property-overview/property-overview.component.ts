import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyOverviewComponent {
  navbarItems = ['Fotos', 'Menu'];
  navbarSelectedItem = 0;

  images: string[] = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  tags = ['Compran', 'Venta'];

  itemChange(index: number): void {
    this.navbarSelectedItem = index;
  }
}
