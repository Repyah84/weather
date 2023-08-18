import { Injectable } from '@angular/core';
import { GeocodingApiService } from '@api';
import { CACHE_TIME } from '@const';
import { CityGeocoding, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';
import { DataCacheService } from '../data-cache/data-cache.service';
import { getCacheKay } from '@helpers';

@Injectable({
  providedIn: 'root',
})
export class CityGeocodingCacheService {
  public constructor(
    private readonly _geocoding: GeocodingApiService,
    private readonly _dataCache: DataCacheService
  ) {}
  public getCityGeocodingCache(cityName: string): Observable<CityGeocoding[]> {
    return this._dataCache.getCachedData({
      key: getCacheKay('CITY_GEOCODING', cityName),
      cachingObservable: () => this._geocoding.getCityGeocoding(cityName),
      cacheTime: CACHE_TIME,
    });
  }

  public getCityGeocodingReverseCache(
    coord: CityWeatherCoord
  ): Observable<CityGeocoding[]> {
    return this._dataCache.getCachedData({
      key: getCacheKay('CITY_GEOCODING_REVERSE', coord),
      cachingObservable: () => this._geocoding.getCityGeocodingReverse(coord),
      cacheTime: CACHE_TIME,
    });
  }
}
