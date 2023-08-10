import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherPageComponent } from './city-weather-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherPageComponent,
  },
];

@NgModule({
  declarations: [CityWeatherPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CityWeatherPageModule {}
