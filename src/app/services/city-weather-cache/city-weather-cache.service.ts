import { Injectable } from '@angular/core';
import { CityWeatherApiService } from '@api';
import { CACHE_TIME } from '@const';
import { parsToString } from '@helpers';
import { CityWeather, CityWeatherCoord, KeyCache } from '@types';
import { Observable } from 'rxjs';
import { DataCacheService } from '../data-cache/data-cache.service';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherCacheService {
  public constructor(
    private readonly _dataCache: DataCacheService,
    private readonly _cityWeather: CityWeatherApiService
  ) {}

  public getCityWeatherCache(coord: CityWeatherCoord): Observable<CityWeather> {
    return this._dataCache.getCachedData({
      key: `${KeyCache.CITY_WEATHER}${parsToString(coord)}`,
      cachingObservable: () => this._cityWeather.getCityWeather(coord),
      cacheTime: CACHE_TIME,
    });
  }
}
