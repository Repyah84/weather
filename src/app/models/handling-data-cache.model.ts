import { Observable, ReplaySubject, Subject, share } from 'rxjs';

export class HandlingDataCache<T> {
  private readonly _destroyer = new Subject<void>();

  private _date = 0;

  private _obs: Observable<T>;

  public constructor(
    public readonly observableFn: () => Observable<T>,
    public readonly cacheTime: number
  ) {
    this._initialTime();

    this._obs = observableFn().pipe(
      share({
        connector: () => new ReplaySubject(1),
        resetOnComplete: () => this._destroyer,
        resetOnError: true,
      })
    );
  }

  private _initialTime(): void {
    this._date = Date.now() + this.cacheTime;
  }

  private _compareDate(): void {
    const newDate = Date.now();

    if (newDate >= this._date) {
      this._destroyer.next();
      this._initialTime();
    }
  }

  public getObs(): Observable<T> {
    this._compareDate();

    return this._obs;
  }
}
