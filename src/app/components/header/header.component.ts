import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public readonly routerLinks = [
    {
      link: 'dashboard',
      title: 'Dashboard',
    },
    {
      link: 'favorite-city-list',
      title: 'Favorite list',
    },
  ];
}
