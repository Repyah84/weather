import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherDashboardPageComponent } from './city-weather-dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherDashboardPageComponent,
  },
];

@NgModule({
  declarations: [CityWeatherDashboardPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CityWeatherDashboardPageModule {}
