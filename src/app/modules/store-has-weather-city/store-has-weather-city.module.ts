import { NgModule } from '@angular/core';
import { StoreHasWeatherCityPipe } from './store-has-weather-city.pipe';

@NgModule({
  declarations: [StoreHasWeatherCityPipe],
  exports: [StoreHasWeatherCityPipe],
})
export class StoreHasWeatherCityModule {}
