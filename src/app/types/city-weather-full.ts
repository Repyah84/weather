import { CityGeocoding } from './city-geocoding';
import { CityWeather } from './city-weather';

export interface CityWeatherFull {
  readonly geocoding: CityGeocoding;
  readonly cityWeather: CityWeather;
}
