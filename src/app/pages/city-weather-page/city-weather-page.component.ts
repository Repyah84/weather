import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CityWeatherForecastTransformService } from '@services';
import { CityWeatherForecastFull } from '@types';

@Component({
  selector: 'app-city-weather-page',
  templateUrl: './city-weather-page.component.html',
  styleUrls: ['./city-weather-page.component.scss'],
  providers: [CityWeatherForecastTransformService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherPageComponent implements OnInit, OnInit {
  @Input()
  public weatherForecast!: CityWeatherForecastFull;

  public ngOnInit(): void {
    console.log(this.weatherForecast);
  }
}
