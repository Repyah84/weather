import { Injectable } from '@angular/core';

const ICON_PATH = 'https://openweathermap.org';

@Injectable({
  providedIn: 'root',
})
export class WeatherIconApiService {
  private _parsIconUrl(iconId: string, multiplier?: number): URL {
    const url = new URL(ICON_PATH);

    if (multiplier === undefined || multiplier <= 1) {
      return new URL(`/img/wn/${iconId}.png`, url);
    }

    return new URL(`/img/wn/${iconId}@${multiplier}x.png`, url);
  }

  public getIconUrl(iconId: string, multiplier?: number): string {
    return this._parsIconUrl(iconId, multiplier).toString();
  }
}
