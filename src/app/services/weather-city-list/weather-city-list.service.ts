import { Injectable } from '@angular/core';
import { DEFAULT_CITY_LIST } from '@const';
import { CityGeocoding, CityWeatherCoord, CityWeatherFull } from '@types';
import { Observable, forkJoin, map, of, switchMap } from 'rxjs';

import { GeocodingCacheService } from '../geocoding-cache/geocoding-cache.service';
import { CityWeatherCacheService } from '../city-weather-cache/city-weather-cache.service';

@Injectable({
  providedIn: 'root',
})
export class WeatherCityListService {
  public constructor(
    private readonly _geocoding: GeocodingCacheService,
    private readonly _cityWeather: CityWeatherCacheService
  ) {}

  public getCityWeatherList(
    cityName: string
  ): Observable<CityWeatherFull[] | null> {
    return this._geocoding.getCityGeocodingCache(cityName).pipe(
      switchMap((geocodingList) => {
        if (geocodingList.length === 0) {
          return of(null);
        }

        return this._getCityWeatherListFull(geocodingList);
      })
    );
  }

  public getDefaultCityList(): Observable<CityWeatherFull[]> {
    const defaultList = DEFAULT_CITY_LIST.map((cityName) =>
      this._geocoding
        .getCityGeocodingCache(cityName)
        .pipe(map(([city]) => city))
    );

    return forkJoin([...defaultList]).pipe(
      switchMap((geocodingList) => {
        return this._getCityWeatherListFull(geocodingList);
      })
    );
  }

  private _getCityWeatherListFull(
    list: CityGeocoding[]
  ): Observable<CityWeatherFull[]> {
    const weatherList = list.map((geocoding) => {
      const coord: CityWeatherCoord = {
        lat: geocoding.lat,
        lon: geocoding.lon,
      };

      return this._cityWeather
        .getCityWeatherCache(coord)
        .pipe(map((cityWeather) => ({ geocoding, cityWeather })));
    });

    return forkJoin([...weatherList]);
  }
}
