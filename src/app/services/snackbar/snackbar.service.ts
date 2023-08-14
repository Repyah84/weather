import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private readonly _action$ = new BehaviorSubject<string | null>(null);

  public readonly action$ = this._action$.asObservable();

  public setMessage(value: string): void {
    if (this._action$ !== null) {
      this._action$.next(null);
    }

    setTimeout(() => {
      this._action$.next(value);
    }, 150);
  }

  public close(): void {
    this._action$.next(null);
  }
}
