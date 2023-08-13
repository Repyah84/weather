import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CityWeatherForecastFull } from '@types';

@Component({
  selector: 'app-city-weather-header',
  templateUrl: './city-weather-header.component.html',
  styleUrls: ['./city-weather-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherHeaderComponent {
  @Input({ required: true })
  public weather!: CityWeatherForecastFull;
}
