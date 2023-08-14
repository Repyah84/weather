import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { jsonPars } from '@helpers';
import { CityWeatherCityListService, CityWeatherStoreService } from '@services';
import { CityWeatherCoord, CityWeatherFull } from '@types';
import { Observable } from 'rxjs';

export const cityWeatherFavoriteListPageResolver: ResolveFn<
  Observable<CityWeatherFull[]> | null
> = () => {
  const cityWeatherCoordStore = inject(CityWeatherStoreService);

  const cityWeather = inject(CityWeatherCityListService);

  const coordList = cityWeatherCoordStore
    .getCoordList()
    ?.map((item) => jsonPars<CityWeatherCoord>(item));

  return coordList === undefined
    ? null
    : cityWeather.getCityWeatherListByCoord(coordList);
};
