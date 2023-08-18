import {
  DATE_PIPE_DEFAULT_OPTIONS,
  DatePipeConfig,
  formatDate,
} from '@angular/common';
import { Inject, Injectable, LOCALE_ID, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateService {
  public constructor(
    @Inject(LOCALE_ID) private readonly _locale: string,
    @Inject(DATE_PIPE_DEFAULT_OPTIONS)
    @Optional()
    private readonly _defaultOptions?: DatePipeConfig | null
  ) {}

  public transform(value: string, format: string): string {
    const _timezone = this._defaultOptions?.timezone ?? undefined;

    return formatDate(value, format, this._locale, _timezone);
  }
}
