import { animate, style, transition, trigger } from '@angular/animations';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

const ERROR_ANIMATION = trigger('errorAnime', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translateY(-100%)' }),
    animate('100ms ease-in', style({ opacity: '*', transform: '*' })),
  ]),
  transition(':leave', [
    animate(
      '100ms ease-out',
      style({ opacity: 0, transform: 'translateY(-100%)' })
    ),
  ]),
]);

function transformToString(value: string | null | undefined): string {
  if (!value) {
    return '';
  }

  return value;
}

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  animations: [ERROR_ANIMATION],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent implements OnChanges {
  @Input({ transform: transformToString })
  public set value(value: string) {
    this.group.controls.search.setValue(value);
  }

  @Input()
  public error: boolean = false;

  @Output()
  public readonly inSearchCity = new EventEmitter<string | undefined>();

  public readonly group = new FormGroup({
    search: new FormControl<string | undefined>('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
      updateOn: 'submit',
    }),
  });

  public constructor(private readonly _cdr: ChangeDetectorRef) {}

  public ngOnChanges(): void {
    if (this.error) {
      setTimeout(() => {
        // The setErrors method does not set errors https://github.com/angular/angular/issues/38191
        this.group.controls.search.setErrors({ citySearch: true });

        this._cdr.markForCheck();
      }, 0);
    }
  }

  public onSubmit(): void {
    if (!this.group.valid) {
      return;
    }

    this.inSearchCity.emit(this.group.controls.search.value);
  }
}
