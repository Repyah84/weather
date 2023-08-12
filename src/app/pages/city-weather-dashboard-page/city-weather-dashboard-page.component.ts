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
  @Input()
  public cityWeatherList: CityWeatherFull[] | null = null;

  @Input()
  public search: string | undefined;

  public constructor(private readonly _route: Router) {}

  //TODO Remove
  public ngOnChanges(changes: SimpleChanges): void {
    console.log('LIST', this.cityWeatherList);

    console.log('search', this.search);
  }

  public onSearch(value: string | undefined): void {
    this._route.navigate([], {
      queryParams: {
        [RouterParams.SEARCH]: value || null,
      },
    });
  }
}
