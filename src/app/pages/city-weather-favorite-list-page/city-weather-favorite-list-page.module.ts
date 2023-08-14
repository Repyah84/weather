import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherFavoriteListPageComponent } from './city-weather-favorite-list-page.component';
import { RouterModule, Routes } from '@angular/router';
import { CityWeatherCardModule } from '@modules';
import { cityWeatherFavoriteListPageResolver } from './city-weather-favorite-list-page.resolver';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherFavoriteListPageComponent,
    resolve: {
      cityWeatherFavorite: cityWeatherFavoriteListPageResolver,
    },
  },
];

@NgModule({
  declarations: [CityWeatherFavoriteListPageComponent],
  imports: [CommonModule, RouterModule.forChild(routes), CityWeatherCardModule],
})
export class CityWeatherFavoriteListPageModule {}
