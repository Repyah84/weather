import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private _timeout: ReturnType<typeof setTimeout> | null = null;

  private readonly _action$ = new BehaviorSubject<string | null>(null);

  public readonly action$ = this._action$.asObservable();

  public setMessage(value: string): void {
    if (this._action$ !== null) {
      this._action$.next(null);
    }

    setTimeout(() => {
      this._action$.next(value);

      this._autoClose();
    }, 150);
  }

  public close(): void {
    this._action$.next(null);
  }

  private _closeTimeout(): void {
    if (this._timeout !== null) {
      clearTimeout(this._timeout);
    }

    this._timeout = null;
  }

  private _autoClose(): void {
    this._closeTimeout();

    this._timeout = setTimeout(() => {
      this._action$.next(null);
    }, 5000);
  }
}
