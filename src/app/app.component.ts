import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeocodingApiService } from '@api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public constructor(private readonly _geocoding: GeocodingApiService) {
    this._geocoding.getCityGeocoding('London').subscribe((r) => {
      console.log(r);
    });
  }
}
