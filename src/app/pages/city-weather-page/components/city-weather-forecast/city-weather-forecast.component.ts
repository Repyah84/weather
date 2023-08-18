import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
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
  public cityCoord!: CityWeatherCoord;

  @Input({ required: true })
  public forecast!: CityWeatherForecastTransform[];

  @Output()
  public readonly storeCityChange = new EventEmitter<void>();

  public ngOnInit(): void {
    this.selectDay = this.forecast[0].day;
  }

  public onToggleCity(): void {
    this.storeCityChange.emit();
  }
}
