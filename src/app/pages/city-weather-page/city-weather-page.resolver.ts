import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { jsonPars } from '@helpers';
import { CityWeatherForecastService } from '@services';
import { CityWeatherForecastFull } from '@types';
import { Observable } from 'rxjs';

export const cityWeatherPageResolver: ResolveFn<
  Observable<CityWeatherForecastFull>
> = (route: ActivatedRouteSnapshot) => {
  const weatherForecast = inject(CityWeatherForecastService);

  const parm = route.paramMap.get('coord');

  if (parm === null) {
    throw new Error('Weather forecast resolve error');
  }

  return weatherForecast.getCityWeatherForecast(jsonPars(parm));
};
