import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY, API_PATH } from '@const';
import { CityGeocoding } from '@types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GeocodingApiService {
  constructor(private readonly _http: HttpClient) {}

  public getCityGeocoding(cityName: string): Observable<CityGeocoding> {
    const params = new HttpParams().appendAll({
      q: cityName,
      appid: API_KEY,
      limit: 5,
    });

    return this._http.get<CityGeocoding>(`${API_PATH}/geo/1.0/direct`, {
      params,
    });
  }
}
