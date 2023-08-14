import { Injectable } from '@angular/core';
import { StoreService } from '../store/store.service';
import { jsonPars, parsToString } from '@helpers';
import { WEATHER_LIST_STORE_KEY } from '@const';

@Injectable({
  providedIn: 'root',
})
export class CityWeatherStoreService {
  public constructor(private readonly _store: StoreService) {}

  public getCoordList(): string[] | null {
    const soreData = this._store.getItem(WEATHER_LIST_STORE_KEY);

    if (soreData === null) {
      return null;
    }

    return jsonPars(soreData);
  }

  public setCoord(item: string): void {
    let soreDate = this.getCoordList();

    if (soreDate === null) {
      soreDate = [];
    }

    soreDate.push(item);

    this._store.setItem(WEATHER_LIST_STORE_KEY, parsToString(soreDate));
  }

  public hasCoord(item: string): boolean {
    const dataStore = this.getCoordList();

    if (dataStore === null) {
      return false;
    }

    return dataStore.some((storeItem) => item === storeItem);
  }

  public deleteCoord(item: string): void {
    const dataStore = this.getCoordList();

    if (dataStore === null) {
      return;
    }

    const newDate = dataStore.filter((storeItem) => storeItem !== item);

    if (newDate.length === 0) {
      this._store.deleteItem(WEATHER_LIST_STORE_KEY);

      return;
    }

    this._store.setItem(WEATHER_LIST_STORE_KEY, parsToString(newDate));
  }

  public toggleCoord(item: string): number {
    const isCoord = this.hasCoord(item);

    if (isCoord) {
      this.deleteCoord(item);

      return 0;
    }

    this.setCoord(item);

    return 1;
  }
}
