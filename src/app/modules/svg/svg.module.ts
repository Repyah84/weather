import { NgModule } from '@angular/core';
import { SvgPushPinComponent } from './svg-push-pin/svg-push-pin.component';
import { SvgSearchComponent } from './svg-search/svg-search.component';
import { ArrowRightComponent } from './arrow-right/arrow-right.component';
import { SvgDashboardComponent } from './svg-dashboard/svg-dashboard.component';
import { SvgListComponent } from './svg-list/svg-list.component';

const COMPONENTS = [
  SvgPushPinComponent,
  SvgSearchComponent,
  ArrowRightComponent,
  SvgDashboardComponent,
  SvgListComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class SvgModule {}
