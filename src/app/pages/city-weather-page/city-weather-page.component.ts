import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherPageComponent {}
