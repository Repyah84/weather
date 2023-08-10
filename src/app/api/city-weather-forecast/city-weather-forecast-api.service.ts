import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_PATH } from '@const';
import { CityWeatherCoord, CityWeatherForecast } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherForecastApiService {
  public constructor(private readonly _http: HttpClient) {}

  public gerCityWeatherForecast({
    lat,
    lon,
  }: CityWeatherCoord): Observable<CityWeatherForecast> {
    const params = new HttpParams().appendAll({
      appid: API_KEY,
      lat,
      lon,
      units: 'metric',
    });

    return this._http.get<CityWeatherForecast>(
      `${API_PATH}/data/2.5/forecast`,
      { params }
    );
  }
}
