import { Injectable } from '@angular/core';
import { CityWeatherApiService } from '@api';
import { CACHE_TIME } from '@const';
import { handlingDataCache } from '@helpers';
import { CityWeather, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherCacheService {
  private readonly _cityWeatherCache = new Map<
    string,
    () => Observable<CityWeather>
  >();

  public constructor(private readonly _cityWeather: CityWeatherApiService) {}

  public getCityWeather(
    key: string,
    coord: CityWeatherCoord
  ): Observable<CityWeather> {
    let cityWeather = this._cityWeatherCache.get(key);

    if (cityWeather === undefined) {
      cityWeather = handlingDataCache<CityWeather>({
        functionThatReturnsObservable: () =>
          this._cityWeather.getCityWeather(coord),
        timeCache: CACHE_TIME,
      });

      this._cityWeatherCache.set(key, cityWeather);
    }

    return cityWeather();
  }
}
