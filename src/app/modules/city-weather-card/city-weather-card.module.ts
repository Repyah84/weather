import { NgModule } from '@angular/core';
import { CityWeatherCardComponent } from './city-weather-card.component';
import { NgFor, NgIf, NgOptimizedImage } from '@angular/common';
import { WeatherIconModule } from '../weather-icon/weather-icon.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [CityWeatherCardComponent],
  imports: [NgOptimizedImage, WeatherIconModule, NgFor, NgIf, RouterModule],
  exports: [CityWeatherCardComponent],
})
export class CityWeatherCardModule {}
