import { map, shareReplay, switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '@shared/services';
import { of } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss'],
})
export class IndexComponent implements OnInit {
  private properties$ = this.propertiesService.getProperties().pipe(
    map((result) => (result.success ? result.data : [])),
    shareReplay()
  );

  propertyImages$ = this.properties$.pipe(
    switchMap((properties) => {
      if (properties.length === 0) {
        return of([]);
      }

      const propertyId = properties[0].id;
      // this (propertyId - 1)  is because the urls of images are zero index
      return this.propertiesService
        .getPropertyImages(propertyId - 1)
        .pipe(map((result) => (result.success ? result.data.images : [])));
    })
  );

  constructor(private propertiesService: PropertiesService) {
    this.propertyImages$.subscribe((data) => console.log(data));
  }

  ngOnInit() {}
}
