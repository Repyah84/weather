import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { CityWeatherCityListService } from '@services';
import { CityWeatherFull, RouterParams } from '@types';
import { Observable, of } from 'rxjs';

export const cityWeatherDashboardPageResolver: ResolveFn<
  Observable<CityWeatherFull[] | null>
> = (route: ActivatedRouteSnapshot) => {
  const cityList = inject(CityWeatherCityListService);

  const param = route.queryParamMap.get(RouterParams.SEARCH);

  if (param === null) {
    // return cityList.getDefaultCityList();
    return of(null);
  }

  return cityList.getCityWeatherList(param);
};
