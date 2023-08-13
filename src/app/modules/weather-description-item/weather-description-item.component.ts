import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-description-item',
  templateUrl: './weather-description-item.component.html',
  styleUrls: ['./weather-description-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WeatherDescriptionItemComponent {
  @Input({ required: true })
  public value: string | number = '';
}
