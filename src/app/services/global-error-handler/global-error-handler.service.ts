import { HttpErrorResponse } from '@angular/common/http';
import { Injectable, ErrorHandler, NgZone } from '@angular/core';
import { SnackbarService } from '../snackbar/snackbar.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(
    private readonly _snackbar: SnackbarService,
    private readonly _ngZone: NgZone
  ) {}

  handleError(error: any) {
    if (!(error instanceof HttpErrorResponse)) {
      error = error.rejection;
    }

    this._ngZone.run(() => {
      this._snackbar.setMessage(error?.message || 'Undefined client error');
    });
  }
}
