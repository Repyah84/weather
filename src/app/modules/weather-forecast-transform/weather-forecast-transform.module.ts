import { NgModule } from '@angular/core';
import { WeatherForecastTransformPipe } from './weather-forecast-transform.pipe';

@NgModule({
  declarations: [WeatherForecastTransformPipe],
  exports: [WeatherForecastTransformPipe],
})
export class WeatherForecastTransformModule {}
