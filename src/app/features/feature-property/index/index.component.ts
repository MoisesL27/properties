import { ChangeDetectionStrategy, Component, Inject, ViewChild } from '@angular/core';
import { PropertiesService } from '@shared/services';
import { HeaderMenu } from '@shared/ui/header/header-menu';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';
import { PropertyOverviewComponent } from './../components/property-overview/property-overview.component';
import { headerConfig, HeaderConfigToken } from './header-config';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
  providers: [{ provide: HeaderConfigToken, useValue: headerConfig }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndexComponent {
  @ViewChild(PropertyOverviewComponent) overviewComponent: PropertyOverviewComponent;

  private propertiesLenght = 0;
  private propertyIndex = new BehaviorSubject<number>(0);
  private loading = new BehaviorSubject(true);

  private properties$ = this.propertiesService.getProperties().pipe(
    map((result) => (result.success ? result.data : [])),
    tap(() => this.loading.next(false)),
    tap((properties) => (this.propertiesLenght = properties.length)),
    shareReplay()
  );

  /**
   * Stores the current property, and the order is handled by this.propertyIndex behaviorSubjec
   */
  currentProperty$ = this.propertyIndex.asObservable().pipe(
    switchMap((index) =>
      this.properties$.pipe(
        map((properties) => (properties.length === 0 ? null : properties[index]))
      )
    ),
    shareReplay()
  );

  /**
   * When rendering a new property using the (see next button) every time it happened, a new request
   * is made to get the images of the current property
   */
  propertyImages$ = this.currentProperty$.pipe(
    switchMap((property) => {
      // this (propertyId - 1)  is because the urls of images are zero index
      return this.propertiesService
        .getPropertyImages(property.id - 1)
        .pipe(map((result) => (result.success ? result.data.images : [])));
    }),
    shareReplay()
  );

  isLoading$ = this.loading.asObservable();

  constructor(
    private propertiesService: PropertiesService,
    @Inject(HeaderConfigToken) public headerMenus: HeaderMenu[]
  ) {}

  /**
   * Handle the logic to show more information on other properties
   * @returns void
   */
  showNextProperty(): void {
    const currentIndex = this.propertyIndex.value;

    if (currentIndex < this.propertiesLenght - 1) {
      this.propertyIndex.next(currentIndex + 1);

      return;
    }
    this.propertyIndex.next(0);
  }

  showMap(): void {
    this.overviewComponent.itemChange(1);
  }
}
