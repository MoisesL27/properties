import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Details, Property } from '@shared/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PropertyDetail } from './property-detail';
@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PropertyDetailComponent implements OnInit {
  @Input() property$: Observable<Property>;
  @Output() showNextProperty = new EventEmitter<void>();

  details$: Observable<PropertyDetail[]>;

  constructor(private translocoService: TranslocoService) {}

  ngOnInit(): void {
    /**
     * Stores an array of details following the Detail interface
     */
    this.details$ = this.property$.pipe(
      map((property) => {
        const keys = this.getKeys();
        const icons = this.getIcons();

        return keys.map((key) => ({
          label: this.getLabelTranslation(key as keyof Details),
          value: this.getFormattedValue(property.details[key], key as keyof Details),
          icon: icons[key],
        }));
      })
    );
  }

  private getFormattedValue(value: string | number | boolean, key: keyof Details): string {
    if (typeof value === 'boolean') {
      const translationKey = value ? 'yes' : 'no';

      return this.translocoService.translate(translationKey);
    } else {
      if (key === 'size') {
        return `${value} m2`;
      }

      return value.toString();
    }
  }

  private getLabelTranslation(key: keyof Details): string {
    const customKeys = { air_conditioner: 'air-conditioner', service_room: 'service-room' };

    return customKeys[key] || key;
  }

  /**
   * Each name icon is mapped to details property
   */
  // tslint:disable-next-line: typedef
  private getIcons() {
    return {
      type: 'apartment',
      floors: 'north',
      size: 'square_foot',
      parking: 'directions_car',
      bedrooms: 'bed',
      bathrooms: 'bathroom',
      air_conditioner: 'air',
      terrace: 'balcony',
      backyard: 'yard',
      service_room: 'night_shelter',
      warehouse: 'home',
      security: 'shield',
    };
  }

  /**
   * The keys define the order in which the values appear in the template.
   */
  private getKeys(): (keyof Details)[] {
    return [
      'type',
      'floors',
      'size',
      'parking',
      'bedrooms',
      'bathrooms',
      'air_conditioner',
      'terrace',
      'backyard',
      'service_room',
      'warehouse',
      'security',
    ];
  }
}
