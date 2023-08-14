import { Injectable } from '@angular/core';
import {
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  public constructor(private readonly _router: Router) {}

  public readonly loading$ = this._router.events.pipe(
    filter(
      (event) =>
        event instanceof NavigationStart ||
        event instanceof NavigationEnd ||
        event instanceof NavigationError
    ),
    map((events) => {
      return events instanceof NavigationStart;
    })
  );
}
