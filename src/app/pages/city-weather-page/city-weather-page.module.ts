import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherPageComponent } from './city-weather-page.component';
import { RouterModule, Routes } from '@angular/router';
import { cityWeatherPageResolver } from './city-weather-page.resolver';
import { CityWeatherForecastComponent } from './components/city-weather-forecast/city-weather-forecast.component';
import { WeatherForecastTransformModule } from '@modules';

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
  declarations: [CityWeatherPageComponent, CityWeatherForecastComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CommonModule,
    WeatherForecastTransformModule,
  ],
})
export class CityWeatherPageModule {}
