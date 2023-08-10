import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeocodingApiService, CityWeatherApiService } from '@api';
import { combineLatest, map, switchMap } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public constructor(
    private readonly _geocoding: GeocodingApiService,
    private readonly _cityWeather: CityWeatherApiService
  ) {
    const cityGeocoding = this._geocoding.getCityGeocoding('London').pipe(
      switchMap((date) => {
        const list = date.map(({ lat, lon }) =>
          this._cityWeather.getCityWeather({ lat, lon })
        );
        return combineLatest([...list]);
      })
    );

    cityGeocoding.subscribe((r) => {
      console.log(r);
    });
  }
}
