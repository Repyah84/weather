import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  @Input({ transform: transformToString })
  public set value(value: string) {
    this.group.controls.search.setValue(value);
  }

  @Input()
  public error: string | undefined;

  @Output()
  public readonly inSearchCity = new EventEmitter<string | undefined>();

  public readonly group = new FormGroup({
    search: new FormControl<string | undefined>('', {
      nonNullable: true,
      validators: [Validators.minLength(3)],
    }),
  });

  public onSubmit(): void {
    if (!this.group.valid) {
      return;
    }

    this.inSearchCity.emit(this.group.controls.search.value);
  }
}
