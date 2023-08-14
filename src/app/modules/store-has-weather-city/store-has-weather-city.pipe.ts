import { Pipe, PipeTransform } from '@angular/core';
import { parsToString } from '@helpers';
import { CityWeatherStoreService } from '@services';
import { CityWeatherCoord } from '@types';

@Pipe({
  name: 'storeHasWeatherCity',
})
export class StoreHasWeatherCityPipe implements PipeTransform {
  public constructor(private readonly _weatherStore: CityWeatherStoreService) {}

  transform(value: CityWeatherCoord): boolean {
    return this._weatherStore.hasCoord(parsToString(value));
  }
}
