import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import {
  FormControl,
  FormControlOptions,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchFieldComponent {
  @Input()
  public value: string | undefined;

  @Input()
  public error: string | undefined;

  @Output()
  public readonly inSearchCity = new EventEmitter<string>();

  public readonly group = new FormGroup({
    search: new FormControl<string>('', {
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
