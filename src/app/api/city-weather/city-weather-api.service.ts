import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_PATH } from '@const';
import { CityWeather, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherApiService {
  public constructor(private readonly _http: HttpClient) {}

  public getCityWeather({
    lat,
    lon,
  }: CityWeatherCoord): Observable<CityWeather> {
    const params = new HttpParams().appendAll({
      appid: API_KEY,
      lat,
      lon,
      units: 'metric',
    });

    return this._http.get<CityWeather>(`${API_PATH}/data/2.5/weather`, {
      params,
    });
  }
}
