import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Property } from '@shared/models';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-property-overview',
  templateUrl: './property-overview.component.html',
  styleUrls: ['./property-overview.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyOverviewComponent implements OnInit {
  private navbarSelectedItem = new BehaviorSubject(0);

  @Input() imagesUrl$: Observable<string[]>;
  @Input() property$: Observable<Property>;

  navbarItems = ['photos', 'map'];
  navbarSelectedItem$ = this.navbarSelectedItem.asObservable();

  tags$: Observable<string[]>;

  ngOnInit(): void {
    this.tags$ = this.property$.pipe(map((property) => property.tags));
  }

  itemChange(index: number): void {
    this.navbarSelectedItem.next(index);
  }
}
