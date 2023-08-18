import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { parsToString } from '@helpers';
import {
  CityWeatherForecastTransformService,
  CityWeatherStoreService,
  SnackbarService,
} from '@services';
import { CityWeatherCoord, CityWeatherForecastFull } from '@types';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
  providers: [CityWeatherForecastTransformService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherPageComponent implements OnInit {
  public coord!: CityWeatherCoord;

  @Input()
  public weatherForecast!: CityWeatherForecastFull;

  public constructor(
    private readonly _weatherStore: CityWeatherStoreService,
    private readonly _snackbar: SnackbarService
  ) {}

  public ngOnInit(): void {
    this.initCityCoord();
  }

  public inStoreCityChange(): void {
    const result = this._weatherStore.toggleCoord(parsToString(this.coord));

    this.initCityCoord();

    this._snackbar.setMessage(
      `City was ${result === 1 ? 'add to' : 'delete from'} favorite list`
    );
  }

  private initCityCoord(): void {
    const { lat, lon } = this.weatherForecast.geocoding;

    this.coord = { lat, lon };
  }
}
