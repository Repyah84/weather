import { Injectable } from '@angular/core';
import { CityWeatherForecastCacheService } from '../city-weather-forecast-cache/city-weather-forecast-cache.service';
import { CityGeocodingCacheService } from '../city-geocoding-cache/city-geocoding-cache.service';
import { Observable, map, switchMap } from 'rxjs';
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
    return this._geocoding.getCityGeocodingReverseCache(coord).pipe(
      switchMap((geocoding) =>
        this._weatherForecast.getCityWeatherForecastCache(coord).pipe(
          map((weatherForecast) => ({
            geocoding,
            weatherForecast,
          }))
        )
      )
    );
  }
}
