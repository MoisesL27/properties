import { Observable, of } from 'rxjs';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyOverviewComponent {
  @Input() imagesUrl$: Observable<string[]> = of([]);
  @Input() tags$: Observable<string[]> = of([]);

  navbarItems = ['Fotos', 'Mapa'];
  navbarSelectedItem = 0;

  lat = 28.70406;
  long = 77.102493;
  googleMapType: any = 'satellite';

  itemChange(index: number): void {
    this.navbarSelectedItem = index;
  }
}
