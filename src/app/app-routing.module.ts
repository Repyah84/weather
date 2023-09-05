import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    title: 'Dashboard',
    path: 'dashboard',
    loadChildren: () =>
      import(
        '@pages/city-weather-dashboard-page/city-weather-dashboard-page.module'
      ).then((m) => m.CityWeatherDashboardPageModule),
  },
  {
    title: 'City weather details',
    path: 'city/:coord',
    loadChildren: () =>
      import('@pages/city-weather-page/city-weather-page.module').then(
        (m) => m.CityWeatherPageModule
      ),
  },
  {
    title: 'Favorite cities list',
    path: 'favorite-city-list',
    loadChildren: () =>
      import(
        '@pages/city-weather-favorite-list-page/city-weather-favorite-list-page.module'
      ).then((m) => m.CityWeatherFavoriteListPageModule),
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
