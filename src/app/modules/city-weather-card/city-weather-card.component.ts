import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CityWeather } from '@types';

@Component({
  selector: 'app-city-weather-card',
  templateUrl: './city-weather-card.component.html',
  styleUrls: ['./city-weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherCardComponent {
  @Input({ required: true })
  public cityWeather!: CityWeather;
}
