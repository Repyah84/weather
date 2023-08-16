import { ChangeDetectionStrategy, Component } from '@angular/core';
import { SvgModule } from '@modules';
import { SvgDashboardComponent } from '@modules/svg-dashboard/svg-dashboard.component';
import { SvgListComponent } from '@modules/svg-list/svg-list.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly iconsSvgModule = SvgModule;

  public readonly routerLinks = [
    {
      link: 'dashboard',
      title: 'Dashboard',
      icon: SvgDashboardComponent as any,
    },
    {
      link: 'favorite-city-list',
      title: 'Favorite list',
      icon: SvgListComponent as any,
    },
  ];
}
