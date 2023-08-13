import { Pipe, PipeTransform } from '@angular/core';
import { CityWeatherForecastTransformService } from '@services';
import {
  CityWeatherForecastListItem,
  CityWeatherForecastTransform,
} from '@types';

@Pipe({
  name: 'weatherForecastTransform',
})
export class WeatherForecastTransformPipe implements PipeTransform {
  public constructor(
    private readonly _forecastTransform: CityWeatherForecastTransformService
  ) {}

  transform(
    value: CityWeatherForecastListItem[]
  ): CityWeatherForecastTransform[] {
    return this._forecastTransform.transform(value);
  }
}
