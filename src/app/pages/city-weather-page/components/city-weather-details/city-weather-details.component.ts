import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CityWeatherForecastListItem } from '@types';

@Component({
  selector: 'app-city-weather-details',
  templateUrl: './city-weather-details.component.html',
  styleUrls: ['./city-weather-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherDetailsComponent {
  @Input({ required: true })
  public weatherDetails!: CityWeatherForecastListItem;
}
