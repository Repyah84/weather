import { Injectable } from '@angular/core';
import { GeocodingApiService } from '@api';
import { CACHE_TIME } from '@const';

import { CityGeocoding, KeyCache } from '@types';
import { Observable } from 'rxjs';
import { DataCacheService } from '../data-cache/data-cache.service';

@Injectable({
  providedIn: 'root',
})
export class GeocodingCacheService {
  public constructor(
    private readonly _geocoding: GeocodingApiService,
    private readonly _dataCache: DataCacheService
  ) {}

  public getCityGeocodingCache(cityName: string): Observable<CityGeocoding[]> {
    return this._dataCache.getCachedData({
      key: `${KeyCache.CITY_GEOCODING}${cityName}`,
      cachingObservable: () => this._geocoding.getCityGeocoding(cityName),
      cacheTime: CACHE_TIME,
    });
  }
}
