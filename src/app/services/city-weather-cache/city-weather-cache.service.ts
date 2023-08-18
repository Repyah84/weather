import { Injectable } from '@angular/core';
import { CityWeatherApiService } from '@api';
import { CACHE_TIME } from '@const';
import { CityWeather, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';
import { DataCacheService } from '../data-cache/data-cache.service';
import { getCacheKay } from '@helpers';

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
      key: getCacheKay('CITY_WEATHER', coord),
      cachingObservable: () => this._cityWeather.getCityWeather(coord),
      cacheTime: CACHE_TIME,
    });
  }
}
