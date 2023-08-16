import { Observable, Subject, share, ReplaySubject } from 'rxjs';

interface DataCache<T> {
  readonly cachingObservable: () => Observable<T>;
  readonly cacheTime: number;
}

export function handlingDataCache<T>({
  cachingObservable,
  cacheTime,
}: DataCache<T>): () => Observable<T> {
  const _destroyer = new Subject<void>();

  const initDate = () => Date.now() + cacheTime;

  let date = initDate();

  const _obs = cachingObservable().pipe(
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
