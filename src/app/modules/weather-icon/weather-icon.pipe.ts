import { Pipe, PipeTransform } from '@angular/core';
import { WeatherIconApiService } from '@api';

@Pipe({
  name: 'weatherIcon',
})
export class WeatherIconPipe implements PipeTransform {
  public constructor(private readonly _icon: WeatherIconApiService) {}

  public transform(iconId: string, multiplier?: number): string {
    return this._icon.getIconUrl(iconId, multiplier);
  }
}
