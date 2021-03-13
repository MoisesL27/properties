import { Component } from '@angular/core';
import { PropertiesService } from '@shared/services';
import { BehaviorSubject } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent {
  private propertiesLenght = 0;
  private propertyIndex = new BehaviorSubject<number>(0);

  private properties$ = this.propertiesService.getProperties().pipe(
    map((result) => (result.success ? result.data : [])),
    tap((properties) => (this.propertiesLenght = properties.length)),
    shareReplay()
  );

  currentProperty$ = this.propertyIndex.asObservable().pipe(
    switchMap((index) =>
      this.properties$.pipe(
        map((properties) => (properties.length === 0 ? null : properties[index]))
      )
    ),
    shareReplay()
  );

  propertyImages$ = this.currentProperty$.pipe(
    switchMap((property) => {
      // this (propertyId - 1)  is because the urls of images are zero index
      return this.propertiesService
        .getPropertyImages(property.id - 1)
        .pipe(map((result) => (result.success ? result.data.images : [])));
    }),
    shareReplay()
  );

  constructor(private propertiesService: PropertiesService) {}

  changeProperty(): void {
    const currentIndex = this.propertyIndex.value;

    if (currentIndex < this.propertiesLenght - 1) {
      this.propertyIndex.next(currentIndex + 1);

      return;
    }
    this.propertyIndex.next(0);
  }
}
