import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Property } from '@shared/models';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyOverviewComponent implements OnInit {
  @Input() imagesUrl$: Observable<string[]>;
  @Input() property$: Observable<Property>;

  navbarItems = ['Fotos', 'Mapa'];
  navbarSelectedItem = 0;

  tags$: Observable<string[]>;

  ngOnInit(): void {
    this.tags$ = this.property$.pipe(map((property) => property.tags));
  }

  itemChange(index: number): void {
    this.navbarSelectedItem = index;
  }
}
