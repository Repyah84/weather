import { NgModule } from '@angular/core';
import { WeatherDescriptionItemComponent } from './weather-description-item.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [WeatherDescriptionItemComponent],
  imports: [CommonModule],
  exports: [WeatherDescriptionItemComponent],
})
export class WeatherDescriptionItemModule {}
