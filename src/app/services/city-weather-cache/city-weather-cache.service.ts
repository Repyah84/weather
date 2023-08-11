import { Injectable } from '@angular/core';
import { CityWeatherApiService } from '@api';
import { CACHE_TIME } from '@const';
import { HandlingDataCache } from '@models';
import { CityWeather, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherCacheService {
  private readonly _cityWeatherCache = new Map<
    string,
    HandlingDataCache<CityWeather>
  >();

  public constructor(private readonly _cityWeather: CityWeatherApiService) {}

  public getCityWeather(
    key: string,
    coord: CityWeatherCoord
  ): Observable<CityWeather> {
    let cityWeather = this._cityWeatherCache.get(key);

    if (cityWeather === undefined) {
      cityWeather = new HandlingDataCache<CityWeather>(
        this._getObservable(coord),
        CACHE_TIME
      );

      this._cityWeatherCache.set(key, cityWeather);
    }

    return cityWeather.getObs();
  }

  private _getObservable(
    coord: CityWeatherCoord
  ): () => Observable<CityWeather> {
    return () => this._cityWeather.getCityWeather(coord);
  }
}
