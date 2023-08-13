import { Pipe, PipeTransform } from '@angular/core';
import { CityWeatherForecastTransformService } from '@services';

@Pipe({
  name: 'getDateByDay',
})
export class CityWeatherPageGetDatePipe implements PipeTransform {
  public constructor(
    private readonly _forecastTransform: CityWeatherForecastTransformService
  ) {}

  public transform(value: string): string | null {
    const data = this._forecastTransform.getTransformItem(value);

    if (data === undefined) {
      return null;
    }

    return data.forecastOnDay[0].dt_txt;
  }
}
