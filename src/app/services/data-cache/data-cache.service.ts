import { Injectable } from '@angular/core';
import { handlingDataCache } from '@helpers';
import { Observable } from 'rxjs';

interface InputDataCache<T> {
  key: string;
  cachingObservable: () => Observable<T>;
  cacheTime: number;
}

@Injectable({
  providedIn: 'root',
})
export class DataCacheService {
  private readonly _dataCacheMap = new Map<string, () => Observable<unknown>>();

  public getCachedData<T>({
    key,
    cachingObservable,
    cacheTime,
  }: InputDataCache<T>): Observable<T> {
    let dataCache = this._dataCacheMap.get(key);

    if (dataCache === undefined) {
      dataCache = handlingDataCache({
        cachingObservable,
        cacheTime,
      });

      this._dataCacheMap.set(key, dataCache);
    }

    //TODO Put away as
    return dataCache() as Observable<T>;
  }
}
