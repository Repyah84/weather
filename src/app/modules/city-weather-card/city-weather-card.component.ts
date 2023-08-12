import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { parsToString } from '@helpers';
import { CityWeatherCoord, CityWeatherFull } from '@types';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherCardComponent {
  @Input({ required: true })
  public weather!: CityWeatherFull;

  public get coord(): string {
    const { lat, lon } = this.weather.geocoding;

    return parsToString<CityWeatherCoord>({ lat, lon });
  }
}
