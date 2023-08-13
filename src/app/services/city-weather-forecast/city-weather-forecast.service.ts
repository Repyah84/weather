import { Injectable } from '@angular/core';
import { CityWeatherForecastCacheService } from '../city-weather-forecast-cache/city-weather-forecast-cache.service';
import { CityGeocodingCacheService } from '../city-geocoding-cache/city-geocoding-cache.service';
import { Observable, forkJoin, map } from 'rxjs';
import { CityWeatherCoord, CityWeatherForecastFull } from '@types';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherForecastService {
  public constructor(
    private readonly _weatherForecast: CityWeatherForecastCacheService,
    private readonly _geocoding: CityGeocodingCacheService
  ) {}

  public getCityWeatherForecast(
    coord: CityWeatherCoord
  ): Observable<CityWeatherForecastFull> {
    return forkJoin({
      geocoding: this._geocoding
        .getCityGeocodingReverseCache(coord)
        .pipe(map(([geocoding]) => geocoding)),
      weatherForecast: this._weatherForecast.getCityWeatherForecastCache(coord),
    });
  }
}
