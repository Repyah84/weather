import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-svg-push-pin',
  templateUrl: './svg-push-pin.component.html',
  styleUrls: ['./svg-push-pin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPushPinComponent {}
