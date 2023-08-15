import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CityWeatherForecastTransformService } from '@services';
import { CityWeatherCoord, CityWeatherForecastFull } from '@types';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
  providers: [CityWeatherForecastTransformService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherPageComponent {
  @Input()
  public weatherForecast!: CityWeatherForecastFull;

  //TODO side effect fix
  public get coord(): CityWeatherCoord {
    const { lat, lon } = this.weatherForecast.geocoding;

    return { lat, lon };
  }
}
