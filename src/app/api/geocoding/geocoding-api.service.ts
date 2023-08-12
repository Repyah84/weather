import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_PATH } from '@const';
import { CityGeocoding, CityWeatherCoord } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeocodingApiService {
  public constructor(private readonly _http: HttpClient) {}

  public getCityGeocoding(
    cityName: string,
    limit = 5
  ): Observable<CityGeocoding[]> {
    const params = new HttpParams().appendAll({
      q: cityName,
      appid: API_KEY,
      limit,
    });

    return this._http.get<CityGeocoding[]>(`${API_PATH}/geo/1.0/direct`, {
      params,
    });
  }

  public getReverseGeocoding(
    { lat, lon }: CityWeatherCoord,
    limit: 1
  ): Observable<CityGeocoding> {
    const params = new HttpParams().appendAll({
      appid: API_KEY,
      lat,
      lon,
      limit,
    });

    return this._http.get<CityGeocoding>(`${API_PATH}/geo/1.0/reverse`, {
      params,
    });
  }
}
