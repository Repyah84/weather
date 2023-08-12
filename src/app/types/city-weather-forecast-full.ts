import { CityGeocoding } from './city-geocoding';
import { CityWeatherForecast } from './city-weather-forecast';

export interface CityWeatherForecastFull {
  geocoding: CityGeocoding;
  weatherForecast: CityWeatherForecast;
}
