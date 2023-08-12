import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CityWeatherForecastTransform } from '@types';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherForecastComponent implements OnInit {
  @Input({ required: true })
  public forecast!: CityWeatherForecastTransform[];

  public ngOnInit(): void {
    console.log(this.forecast);
  }
}
