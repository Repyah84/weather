import { Observable, Subject, share, ReplaySubject } from 'rxjs';

interface DataCache<T> {
  readonly functionThatReturnsObservable: () => Observable<T>;
  readonly timeCache: number;
}

export function handlingDataCache<T>({
  functionThatReturnsObservable,
  timeCache,
}: DataCache<T>): () => Observable<T> {
  const _destroyer = new Subject<void>();

  const initDate = () => Date.now() + timeCache;

  let date = initDate();

  const _obs = functionThatReturnsObservable().pipe(
    share({
      connector: () => new ReplaySubject(1),
      resetOnComplete: () => _destroyer,
      resetOnError: true,
      resetOnRefCountZero: false,
    })
  );

  const compareDate = () => {
    const newDate = Date.now();

    if (newDate >= date) {
      _destroyer.next();

      date = initDate();
    }
  };

  const colBack = () => {
    compareDate();

    return _obs;
  };

  return colBack;
}
