import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherPageComponent } from './city-weather-page.component';
import { RouterModule, Routes } from '@angular/router';
import { cityWeatherPageResolver } from './city-weather-page.resolver';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';
import {
  StoreHasWeatherCityModule,
  SvgModule,
  WeatherDescriptionItemModule,
  WeatherIconModule,
} from '@modules';
import { CityWeatherHeaderComponent } from './components/city-weather-header/city-weather-header.component';
import { CityWeatherDetailsComponent } from './components/city-weather-details/city-weather-details.component';
import { CityWeatherPageGetDatePipe } from './city-weather-page-get-date.pipe';
import { WeatherForecastTransformPipe } from './city-weather-page-forecast-transform.pipe';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherPageComponent,
    resolve: {
      weatherForecast: cityWeatherPageResolver,
    },
  },
];

@NgModule({
  declarations: [
    CityWeatherPageComponent,
    CityWeatherForecastComponent,
    CityWeatherHeaderComponent,
    CityWeatherDetailsComponent,
    CityWeatherPageGetDatePipe,
    WeatherForecastTransformPipe,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    WeatherIconModule,
    WeatherDescriptionItemModule,
    StoreHasWeatherCityModule,
    SvgModule,
  ],
})
export class CityWeatherPageModule {}
