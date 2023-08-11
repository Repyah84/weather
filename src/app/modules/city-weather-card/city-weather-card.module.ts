import { NgModule } from '@angular/core';
import { CityWeatherCardComponent } from './city-weather-card.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { WeatherIconModule } from '../weather-icon/weather-icon.module';

@NgModule({
  declarations: [CityWeatherCardComponent],
  imports: [NgOptimizedImage, WeatherIconModule, NgFor, NgIf],
  exports: [CityWeatherCardComponent],
})
export class CityWeatherCardModule {}
