import { Injectable } from '@angular/core';
import { GeocodingApiService } from '@api';
import { CACHE_TIME } from '@const';
import { handlingDataCache } from '@helpers';

import { CityGeocoding } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeocodingCacheService {
  private readonly _geocodingCache = new Map<
    string,
    () => Observable<CityGeocoding[]>
  >();

  public constructor(private readonly _geocoding: GeocodingApiService) {}

  public getGeocoding(
    cityName: string,
    limit?: number
  ): Observable<CityGeocoding[]> {
    let geocoding = this._geocodingCache.get(cityName);

    if (geocoding === undefined) {
      geocoding = handlingDataCache<CityGeocoding[]>({
        functionThatReturnsObservable: () =>
          this._geocoding.getCityGeocoding(cityName, limit),
        timeCache: CACHE_TIME,
      });

      this._geocodingCache.set(cityName, geocoding);
    }

    return geocoding();
  }
}
