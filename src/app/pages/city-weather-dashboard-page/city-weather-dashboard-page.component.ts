import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { CityWeatherFull, RouterParams } from '@types';

@Component({
  selector: 'app-city-weather-dashboard-page',
  templateUrl: './city-weather-dashboard-page.component.html',
  styleUrls: ['./city-weather-dashboard-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityWeatherDashboardPageComponent implements OnChanges {
  public foo = '';

  @Input()
  public cityWeatherList: CityWeatherFull[] | null = null;

  public constructor(private readonly _route: Router) {}

  public ngOnChanges(changes: SimpleChanges): void {
    console.log('LIST', this.cityWeatherList);
  }

  public onSearch(value: string): void {
    this._route.navigate([], {
      queryParams: {
        [RouterParams.SEARCH]: value,
      },
    });
  }
}
