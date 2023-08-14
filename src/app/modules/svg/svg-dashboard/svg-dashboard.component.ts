import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-dashboard',
  templateUrl: './svg-dashboard.component.html',
  styleUrls: ['./svg-dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDashboardComponent {}
