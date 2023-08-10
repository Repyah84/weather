import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherFavoriteListPageComponent } from './city-weather-favorite-list-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherFavoriteListPageComponent,
  },
];

@NgModule({
  declarations: [CityWeatherFavoriteListPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class CityWeatherFavoriteListPageModule {}
