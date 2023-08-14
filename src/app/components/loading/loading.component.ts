import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LoadingService } from '@services';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadingComponent {
  public readonly loading$ = this._loading.loading$;

  public constructor(private readonly _loading: LoadingService) {}
}
