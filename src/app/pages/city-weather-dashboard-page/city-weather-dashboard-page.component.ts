import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CityWeather } from '@types';

@Component({
  selector: 'app-city-weather-dashboard-page',
  templateUrl: './city-weather-dashboard-page.component.html',
  styleUrls: ['./city-weather-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherDashboardPageComponent implements OnChanges {
  public foo = '';

  @Input()
  public cityWeatherList: CityWeather[] | null = null;

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('LIST', this.cityWeatherList);
  }
}
