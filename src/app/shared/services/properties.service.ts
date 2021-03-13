import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Property } from '@shared/models';
import { DataResponse } from '@shared/models/response';
import { API_URL } from '@shared/tokens';
import { ImageUrl } from '@shared/types';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PropertiesService {
  private path = 'properties.json';

  constructor(@Inject(API_URL) private apiUrl: string, private httpClient: HttpClient) {}

  getProperties(): Observable<DataResponse<Property[]>> {
    const resource = `${this.apiUrl}/${this.path}`;

    return this.httpClient.get<Property[]>(resource).pipe(
      map((properties) => ({ data: properties, success: true })),
      catchError((error) => {
        console.log(error);
        return of({ success: false, data: null });
      })
    );
  }

  getPropertyImages(propertyId: number): Observable<DataResponse<ImageUrl[]>> {
    const resource = this.getPropertyImagesUrl(propertyId);

    return this.httpClient.get<ImageUrl[]>(resource).pipe(
      map((images) => ({ data: images, success: true })),
      catchError((error) => {
        console.log(error);
        return of({ success: false, data: null });
      })
    );
  }

  private getPropertyImagesUrl(propertyId: number): string {
    return `${this.apiUrl}/property_images/${propertyId}.json`;
  }
}
