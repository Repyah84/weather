import { Injectable } from '@angular/core';
import { GeocodingApiService } from '@api';
import { CACHE_TIME } from '@const';
import { HandlingDataCache } from '@models';
import { CityGeocoding } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeocodingCacheService {
  private readonly _geocodingCache = new Map<
    string,
    HandlingDataCache<CityGeocoding[]>
  >();

  public constructor(private readonly _geocoding: GeocodingApiService) {}

  public getGeocoding(
    cityName: string,
    limit?: number
  ): Observable<CityGeocoding[]> {
    let geocoding = this._geocodingCache.get(cityName);

    if (geocoding === undefined) {
      geocoding = new HandlingDataCache<CityGeocoding[]>(
        this._getObservable(cityName, limit),
        CACHE_TIME
      );

      this._geocodingCache.set(cityName, geocoding);
    }

    return geocoding.getObs();
  }

  private _getObservable(
    cityName: string,
    limit?: number
  ): () => Observable<CityGeocoding[]> {
    return () => this._geocoding.getCityGeocoding(cityName, limit);
  }
}
