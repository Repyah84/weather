import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  public getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch {
      throw new Error('localStorage get item error');
    }
  }

  public setItem(key: string, item: string): void {
    try {
      localStorage.setItem(key, item);
    } catch (error) {
      throw new Error('localStorage set item error');
    }
  }

  public deleteItem(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch {
      throw new Error('localStorage remove item error');
    }
  }
}
