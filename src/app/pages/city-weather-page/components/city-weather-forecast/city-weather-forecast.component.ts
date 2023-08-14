import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { parsToString } from '@helpers';
import { CityWeatherStoreService } from '@services';
import { CityWeatherCoord, CityWeatherForecastTransform } from '@types';

@Component({
  selector: 'app-city-weather-forecast',
  templateUrl: './city-weather-forecast.component.html',
  styleUrls: ['./city-weather-forecast.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherForecastComponent implements OnInit {
  public selectDay!: string;

  @Input({ required: true })
  public coord!: CityWeatherCoord;

  @Input({ required: true })
  public forecast!: CityWeatherForecastTransform[];

  public constructor(private readonly _weatherStore: CityWeatherStoreService) {}

  public ngOnInit(): void {
    console.log('@@@@', this.forecast);
    this.selectDay = this.forecast[0].day;
  }

  public onAddToStore(): void {
    this._weatherStore.toggleCoord(parsToString(this.coord));
  }
}
