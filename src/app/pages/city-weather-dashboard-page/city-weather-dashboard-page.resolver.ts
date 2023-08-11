import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { WeatherCityListService } from '@services';
import { CityWeatherFull, RouteParams } from '@types';
import { Observable } from 'rxjs';

export const cityWeatherDashboardPageResolver: ResolveFn<
  Observable<CityWeatherFull[] | null>
> = (route: ActivatedRouteSnapshot) => {
  const cityList = inject(WeatherCityListService);

  const param = route.queryParamMap.get(RouteParams.SEARCH);

  if (param === null) {
    return cityList.getDefaultCityList();
  }

  return cityList.getCityWeatherList(param);
};
