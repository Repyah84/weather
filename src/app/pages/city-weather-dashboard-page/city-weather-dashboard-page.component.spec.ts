import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityWeatherDashboardPageComponent } from './city-weather-dashboard-page.component';

describe('CityWeatherDashboardPageComponent', () => {
  let component: CityWeatherDashboardPageComponent;
  let fixture: ComponentFixture<CityWeatherDashboardPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CityWeatherDashboardPageComponent]
    });
    fixture = TestBed.createComponent(CityWeatherDashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
