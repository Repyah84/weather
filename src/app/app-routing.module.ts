import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard',
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@pages').then((m) => m.CityWeatherDashboardPageModule),
  },
  {
    path: 'city/:coord',
    loadChildren: () => import('@pages').then((m) => m.CityWeatherPageModule),
  },
  {
    path: 'favorite-city-list',
    loadChildren: () =>
      import('@pages').then((m) => m.CityWeatherFavoriteListPageModule),
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
