import { NgModule } from '@angular/core';
import { CityWeatherCardComponent } from './city-weather-card.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { WeatherIconModule } from '../weather-icon/weather-icon.module';
import { RouterModule } from '@angular/router';
import { WeatherDescriptionItemModule } from '../weather-description-item/weather-description-item.module';
import { SvgModule } from '../svg/svg.module';
import { StoreHasWeatherCityModule } from '../store-has-weather-city/store-has-weather-city.module';

@NgModule({
  declarations: [CityWeatherCardComponent],
  imports: [
    NgOptimizedImage,
    WeatherIconModule,
    NgFor,
    NgIf,
    RouterModule,
    WeatherDescriptionItemModule,
    SvgModule,
    StoreHasWeatherCityModule,
  ],
  exports: [CityWeatherCardComponent],
})
export class CityWeatherCardModule {}
