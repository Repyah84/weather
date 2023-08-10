import { Injectable } from '@angular/core';
import { ICON_API_PATH } from '@const';

@Injectable({
  providedIn: 'root',
})
export class WeatherIconApiService {
  private _parsIconUrl(iconId: string, multiplier?: number): URL {
    const url = new URL(ICON_API_PATH);

    if (multiplier === undefined || multiplier <= 1) {
      return new URL(`/img/wn/${iconId}.png`, url);
    }

    return new URL(`/img/wn/${iconId}@${multiplier}x.png`, url);
  }

  public getIconUrl(iconId: string, multiplier?: number): string {
    return this._parsIconUrl(iconId, multiplier).toString();
  }
}
