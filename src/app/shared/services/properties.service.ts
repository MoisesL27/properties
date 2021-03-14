import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Property, PropertyImages } from '@shared/models';
import { DataResponse } from '@shared/models/response';
import { API_URL } from '@shared/tokens';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PropertiesService {
  private path = 'properties.json';

  constructor(@Inject(API_URL) private apiUrl: string, private httpClient: HttpClient) {}

  /**
   * Get all the properties available based in the following resource
   * https://rtfe-test-default-rtdb.firebaseio.com/properties.json
   * @returns Observable<DataResponse<Property[]>>
   */
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

  /**
   * Get all the images related with a property using the following resource
   *  https://rtfe-test-default-rtdb.firebaseio.com/property_images/#.json
   * @param propertyId Property id
   * @returns Observable<DataResponse<PropertyImages>>
   */
  getPropertyImages(propertyId: number): Observable<DataResponse<PropertyImages>> {
    const resource = this.getPropertyImagesUrl(propertyId);

    return this.httpClient.get<PropertyImages>(resource).pipe(
      map((images) => ({ data: images, success: true })),
      catchError((error) => {
        console.log(error);
        return of({ success: false, data: null });
      })
    );
  }

  /**
   * Compose the url (resource) used to get the images related to a property
   * @param propertyId Property id
   * @returns string
   */

  private getPropertyImagesUrl(propertyId: number): string {
    return `${this.apiUrl}/property_images/${propertyId}.json`;
  }
}
