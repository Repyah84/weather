import { Injectable } from '@angular/core';
import { CityWeatherForecastApiService } from '@api';
import { DataCacheService } from '../data-cache/data-cache.service';
import { Observable } from 'rxjs';
import { CityWeatherCoord, CityWeatherForecast, KeyCache } from '@types';
import { parsToString } from '@helpers';
import { CACHE_TIME } from '@const';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherForecastCacheService {
  public constructor(
    private readonly _weatherForecast: CityWeatherForecastApiService,
    private readonly _dataCache: DataCacheService
  ) {}

  public getCityWeatherForecastCache(
    coord: CityWeatherCoord
  ): Observable<CityWeatherForecast> {
    return this._dataCache.getCachedData({
      key: `${KeyCache.CITY_WEATHER_FORECAST}${parsToString(coord)}`,
      cachingObservable: () =>
        this._weatherForecast.gerCityWeatherForecast(coord),
      cacheTime: CACHE_TIME,
    });
  }
}
