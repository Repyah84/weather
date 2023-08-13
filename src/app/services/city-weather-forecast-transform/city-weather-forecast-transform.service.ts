import { Injectable } from '@angular/core';
import {
  CityWeatherForecastListItem,
  CityWeatherForecastTransform,
} from '@types';
import { DateService } from '../date/date.service';

@Injectable()
export class CityWeatherForecastTransformService {
  private readonly transformMap = new Map<
    string,
    CityWeatherForecastTransform
  >();

  public constructor(private readonly _date: DateService) {}

  public transform(
    forecastList: CityWeatherForecastListItem[]
  ): CityWeatherForecastTransform[] {
    forecastList.forEach((item) => {
      const key = this._date.transform(item.dt_txt, 'EEEE');

      let forecastItem = this.transformMap.get(key);

      if (forecastItem === undefined) {
        forecastItem = {
          day: key,
          forecastOnDay: [],
        };
      }

      forecastItem.forecastOnDay.push(item);

      this.transformMap.set(key, forecastItem);
    });

    return Array.from(this.transformMap).map(([_name, value]) => value);
  }

  public getTransformItem(
    key: string
  ): CityWeatherForecastTransform | undefined {
    return this.transformMap.get(key);
  }
}
