import { CityWeatherForecastListItem } from './city-weather-forecast-list-item';

export interface CityWeatherForecastTransform {
  day: string;
  forecastOnDay: CityWeatherForecastListItem[];
}
