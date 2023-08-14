import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityWeatherDashboardPageComponent } from './city-weather-dashboard-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SearchFieldComponent } from './components/search-field/search-field.component';
import { ReactiveFormsModule } from '@angular/forms';
import { cityWeatherDashboardPageResolver } from './city-weather-dashboard-page.resolver';
import { CityWeatherCardModule, SvgModule } from '@modules';

const routes: Routes = [
  {
    path: '',
    component: CityWeatherDashboardPageComponent,
    resolve: {
      cityWeatherList: cityWeatherDashboardPageResolver,
    },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange',
  },
];

@NgModule({
  declarations: [CityWeatherDashboardPageComponent, SearchFieldComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    CityWeatherCardModule,
    SvgModule,
  ],
})
export class CityWeatherDashboardPageModule {}
