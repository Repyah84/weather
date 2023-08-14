import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CityWeatherFull } from '@types';

@Component({
  selector: 'app-city-weather-favorite-list-page',
  templateUrl: './city-weather-favorite-list-page.component.html',
  styleUrls: ['./city-weather-favorite-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherFavoriteListPageComponent {
  @Input({ required: true })
  public cityWeatherFavorite: CityWeatherFull[] | null = null;
}
