import { ChangeDetectionStrategy, Component } from '@angular/core';
import { animate, style, transition, trigger } from '@angular/animations';
import { SnackbarService } from '@services';

const OPEN_HIDE_ANIMATION = trigger('openHide', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(100%)' }),
    animate('100ms ease-out', style({ opacity: '*', transform: '*' })),
  ]),
  transition(':leave', [
    animate(
      '100ms ease-out',
      style({ opacity: 0, transform: 'translateY(100%)' })
    ),
  ]),
]);

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.scss'],
  animations: [OPEN_HIDE_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackbarComponent {
  public message$ = this._snackbar.action$;

  public constructor(private readonly _snackbar: SnackbarService) {}

  public onClose(): void {
    this._snackbar.close();
  }
}
