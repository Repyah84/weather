import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherFavoriteListPageComponent } from './city-weather-favorite-list-page.component';

describe('CityWeatherFavoriteListPageComponent', () => {
  let component: CityWeatherFavoriteListPageComponent;
  let fixture: ComponentFixture<CityWeatherFavoriteListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherFavoriteListPageComponent],
    });
    fixture = TestBed.createComponent(CityWeatherFavoriteListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
